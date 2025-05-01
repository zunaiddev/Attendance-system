async function getUser() {
    await new Promise(resolve => setTimeout(resolve, 2000));
    return {
        id: "user_123456",
        name: "Zunaid",
        email: "zunaid@example.com",
        role: "STUDENT",
        course: "BCA",
        year: "2nd",
        section: "A",
        semester: "4",
        isProfileComplete: false
    };
}

async function getStudents() {
    // await new Promise(resolve => setTimeout(resolve, 2000));
    return {
        user: getUser(),
        data: [
            {
                name: "Amit Sharma",
                roll: "BCA2023-001",
                course: "BCA",
                year: "2nd",
                sec: "A",
                sem: "4th",
                isPresent: false
            },
            {
                name: "Priya Verma",
                roll: "BCA2023-002",
                course: "BCA",
                year: "2nd",
                sec: "A",
                sem: "4th",
                isPresent: false
            },
            {
                name: "Rohit Singh",
                roll: "BCA2023-003",
                course: "BCA",
                year: "2nd",
                sec: "B",
                sem: "4th",
                isPresent: false
            },
            {
                name: "Neha Rani",
                roll: "BCA2023-004",
                course: "BCA",
                year: "2nd",
                sec: "B",
                sem: "4th",
                isPresent: false
            },
            {
                name: "Zunaid Khan",
                roll: "BCA2023-005",
                course: "BCA",
                year: "2nd",
                sec: "A",
                sem: "4th",
                isPresent: false
            },
            {
                name: "Karan Mehta",
                roll: "BCA2023-006",
                course: "BCA",
                year: "2nd",
                sec: "C",
                sem: "4th",
                isPresent: false
            },
            {
                name: "Sneha Yadav",
                roll: "BCA2023-007",
                course: "BCA",
                year: "2nd",
                sec: "C",
                sem: "4th",
                isPresent: false
            }
        ]
    }
}

export {getUser, getStudents};