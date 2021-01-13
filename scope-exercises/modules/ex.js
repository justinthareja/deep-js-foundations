var currentEnrollment = [410, 105, 664, 375];

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

var deepJS = defineWorkshop();

studentRecords.forEach(deepJS.addStudent);
currentEnrollment.forEach(deepJS.enrollStudent);

deepJS.printCurrentEnrollment();
console.log("----");

deepJS.enrollPaidStudents();
deepJS.printCurrentEnrollment();
console.log("----");

deepJS.remindUnpaidStudents();

function defineWorkshop() {
	var currentEnrollment = [];
	var studentRecords = [];

	var publicAPI = { 
		addStudent,
		enrollStudent,
		printCurrentEnrollment,
		enrollPaidStudents,
		remindUnpaidStudents
	};
	
	return publicAPI;

	// ********************************

	function addStudent(record) {
		studentRecords.push(record);
	}

	function enrollStudent (id) {
		currentEnrollment.push(id);
	}

	function printCurrentEnrollment() {
		var records = currentEnrollment.map(getStudentFromId);

		records.sort(sortByNameAsc);
		records.forEach(printRecord);
	}

	function enrollPaidStudents() {
		var recordsToEnroll = studentRecords.filter(needToEnroll);
		var idsToEnroll = recordsToEnroll.map(getStudentId);

		idsToEnroll.forEach(enrollStudent);
	}

	function remindUnpaidStudents() {
		var unpaidStudents = currentEnrollment.map(getStudentFromId)
		
		unpaidStudents = unpaidStudents.filter(notYetPaid);
		unpaidStudents.forEach(printRecord)
	}
	

	function getStudentFromId(studentId) {
		return studentRecords.find(matchId);

		// *************************

		function matchId(record) {
			return (record.id == studentId);
		}
	}

	function sortByNameAsc(record1, record2) {
		if (record1.name < record2.name) return -1;
		else if (record1.name > record2.name) return 1;
		else return 0;
	}

	function printRecord(record) {
		console.log(`${record.name} (${record.id}): ${record.paid ? "Paid" : "Not Paid"}`);
	}

	function needToEnroll(record) {
		return (record.paid && !currentEnrollment.includes(record.id));
	}

	function getStudentId(record) {
		return record.id;
	}

	function notYetPaid(record) {
		return !record.paid;
	}
}




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


