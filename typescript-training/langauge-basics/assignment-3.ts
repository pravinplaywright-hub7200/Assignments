let studentNames: string[] = ["Suresh", "Mahesh", "Naresh"];
let marks: number[] = [75, 80, 82];
let totalMarksSum: number = 0;
let updatedMarksArray: number[] = []; 

for (let i: number = 0; i < studentNames.length; i++) {
    let newMark = marks[i] + 10; 
    
    totalMarksSum += newMark;
    
    updatedMarksArray.push(newMark); 

    console.log(`${studentNames[i]} scored: ${newMark} marks.`);
}

let averageMarks: number = totalMarksSum / studentNames.length;
console.log(`Average marks: ${averageMarks}`);


console.log(`Updated Marks Array:`, updatedMarksArray);