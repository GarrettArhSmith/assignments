
var employees = []

function Employee(name, title, salary) {
    this.name = name
    this.title = title
    this.salary = salary
    this.status = "Full Time"
    this.printEmployeeForm = () => {
        console.log(`Name: ${this.name}, Job Title: ${this.title}, Salaray: ${this.salary}, Status: ${this.status}`)
    }
}

var Garrett = new Employee("Garrett", "Full Stack Developer", "$70,000")
var Jim = new Employee("Jim", "Burger Flipper", "$11.50/hour")
var Jack = new Employee("Jack", "Chief Burger Flipper", "$15/hour")

Jim.status = "Part Time"

Garrett.printEmployeeForm()
Jim.printEmployeeForm()
Jack.printEmployeeForm()

employees.push(Garrett, Jim, Jack)