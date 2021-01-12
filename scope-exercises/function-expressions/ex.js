function sortByNameAscending(a, b) {
	var nameA = a.name.toUpperCase();
	var nameB = b.name.toUpperCase();

	if (nameA > nameB) {
		return 1;
	}

	if (nameA < nameB) {
		return -1;
	}

	return 0;
}

function printRecord({ name, id, paid }) {
	console.log(`${name} (${id}): ${paid ? "Paid" : "Not Paid"}`);
}

function getStudentById(id) {
	return studentRecords.find(function matchId(record) {
		return record.id == id;
	});
}

function printRecords(recordIds = []) {
	var records = recordIds.map(getStudentById);
		
	records.sort(sortByNameAscending);
	records.forEach(printRecord);
}

function paidStudentsToEnroll() {
	var idsToEnroll = studentRecords
		.filter(function toEnroll(record) {
			return record.paid && !currentEnrollment.includes(record.id);
		})
		.map(function getStudentId(student) {
			return student.id
		});

	return [
		...idsToEnroll,
		...currentEnrollment
	];
}

function remindUnpaid(recordIds) {
	var unpaidIds = recordIds.filter(function isUnpaid(studentId) {
		var record = getStudentById(studentId);
		return !record.paid;
	});

	printRecords(unpaidIds);
}





// ********************************

var currentEnrollment = [ 410, 105, 664, 375 ];

var studentRecords = [
	{ id: 313, name: "Frank", paid: true, },
	{ id: 410, name: "Suzy", paid: true, },
	{ id: 709, name: "Brian", paid: false, },
	{ id: 105, name: "Henry", paid: false, },
	{ id: 502, name: "Mary", paid: true, },
	{ id: 664, name: "Bob", paid: false, },
	{ id: 250, name: "Peter", paid: true, },
	{ id: 375, name: "Sarah", paid: true, },
	{ id: 867, name: "Greg", paid: false, },
];

printRecords(currentEnrollment);
console.log("----");
currentEnrollment = paidStudentsToEnroll();
printRecords(currentEnrollment);
console.log("----");
remindUnpaid(currentEnrollment);

/*
	Bob (664): Not Paid
	Henry (105): Not Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Frank (313): Paid
	Henry (105): Not Paid
	Mary (502): Paid
	Peter (250): Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Henry (105): Not Paid
*/
