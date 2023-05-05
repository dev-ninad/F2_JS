fetch("data.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (students) {
        // get the table body element

        let sortedStudents = students;
        const studentTable = document.querySelector('#students-table tbody');
        const sortNameAscBtn = document.querySelector('#sortNameAsc');
        const sortNameDescBtn = document.querySelector('#sortNameDesc');
        const sortMarksBtn = document.querySelector('#sortMarks');
        const sortPassingBtn = document.querySelector('#sortPassing');
        const sortClassBtn = document.querySelector('#sortClass');
        const sortGenderBtn = document.querySelector('#sortGender');
        const searchInput = document.querySelector('#student-s input[type="search"]');
        const searchButton = document.querySelector('#student-s button');
        const tablem = document.getElementById("tablem");
        const tbodyMale = document.querySelector('#tablem tbody');

        const renderStudents = () => {
            // Clear the table body
            studentTable.innerHTML = '';
            tablem.style.display = "none";
            // Loop through the sorted students array and append each row to the table body
            sortedStudents.forEach(student => {
                const row = document.createElement('tr');
                row.innerHTML = `
        <td>${student.id}</td>
        <td><img src="${student.img_src}" alt="avatar"> ${student.first_name} ${student.last_name}</td>
        <td>${student.gender}</td>
        <td>${student.class}</td>
        <td>${student.marks}</td>
        <td>${student.passing ? "Passed" : "Failed"}</td>
        <td>${student.email}</td>
      `;
                studentTable.appendChild(row);
            });
        };

        function loadDatatoTable(stu){
            // tablem.style.display = "none";
            stu.forEach((item)=>{
                let tr = document.createElement("tr");
                let fullname = `${item.first_name} ${item.last_name}`;
                let passing = item.passing? "Passed":"Failed";
                tr.innerHTML = `<td>${item.id}</td>
                                 <td><img src="${item.img_src}">${fullname}</td>
                                 <td>${item.gender}</td>
                                 <td>${item.class}</td>
                                 <td>${item.marks}</td>
                                 <td>${passing}</td>
                                 <td>${item.email}</td>`;
                studentTable.appendChild(tr);
            })
        }

//Event listener for Search button
        searchButton.addEventListener('click', () => {
            const searchTerm = searchInput.value.toLowerCase();
            const searchResults = students.filter(student => {
                const fullName = `${student.first_name.toLowerCase()} ${student.last_name.toLowerCase()}`;
                return (
                    fullName.includes(searchTerm) ||
                    student.email.toLowerCase().includes(searchTerm)
                );
            });
            const val=sortedStudents;
            sortedStudents = searchResults;
            renderStudents();
            sortedStudents = val;
           
        });
        // Event listener for sort by name (ascending) button
        sortNameAscBtn.addEventListener('click', () => {
            sortedStudents.sort((a, b) => a.first_name.localeCompare(b.first_name));
            renderStudents();
        });

        // Event listener for sort by name (descending) button
        sortNameDescBtn.addEventListener('click', () => {
            sortedStudents.sort((a, b) => b.first_name.localeCompare(a.first_name));
            renderStudents();
        });

        // Event listener for sort by marks button
        sortMarksBtn.addEventListener('click', () => {
            sortedStudents.sort((a, b) => b.marks - a.marks);
            renderStudents();
        });

        // Event listener for sort by passing button
        sortPassingBtn.addEventListener('click', () => {
            sortedStudents.sort((a, b) => b.passing - a.passing);
            renderStudents();
        });

        // Event listener for sort by class button
        sortClassBtn.addEventListener('click', () => {
            sortedStudents.sort((a, b) => a.class - b.class);
            renderStudents();
        });

        // Event listener for sort by gender button
        //     sortedStudents.sort((a, b) => a.gender.localeCompare(b.gender));
        sortGenderBtn.addEventListener('click', sortbygender);
        function sortbygender(){ 
            studentTable.innerHTML = '';
            let female = sortedStudents.filter((item) => {
                if (item.gender === "Female") return true;
            })
            loadDatatoTable(female);
            
            let male = sortedStudents.filter((item) => {
                if (item.gender === "Male") return true;
            })
            
            tablem.style.display = "table";

            tbodyMale.innerHTML ='';
            male.forEach((item) => {
                let tr = document.createElement("tr");
                let fullname = `${item.first_name} ${item.last_name}`;
                let passing = item.passing ? "Passed" : "Failed";
                tr.innerHTML = `<td>${item.id}</td>
                         <td><img src="${item.img_src}">${fullname}</td>
                         <td>${item.gender}</td>
                         <td>${item.class}</td>
                         <td>${item.marks}</td>
                         <td>${passing}</td>
                         <td>${item.email}</td>`;
                tbodyMale.appendChild(tr);
            })
        }
        


        // Initially render of the students data.
        renderStudents();
    });