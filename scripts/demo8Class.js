"use strict";
class Student {
    constructor(_RollNo, _Name) {
        this.RollNo = _RollNo;
        this.Name = _Name;
    }
    showDetails() {
        console.log(this.RollNo + " : " + this.Name);
    }
}
let st = new Student(19, "Anna");
st.showDetails();
