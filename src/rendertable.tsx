import { TextSpan } from "typescript";
import { Course } from "./components/course"

export function courseTable(): JSX.Element{
    let courses: Course[] = [{school: "CISC", id: 275, name: "Intro to Software Engineering",
                            desc: "Test description", preReq: "1", coReq: "2", credits: 3},
                            {school: "CISC", id: 361, name: "Operating Systems",
                            desc: "Test description", preReq: "1", coReq: "2", credits: 3},
                            {school: "CISC", id: 372, name: "Parallel Programming",
                            desc: "Test description", preReq: "1", coReq: "2", credits: 3}];
    return (<table>
        <tr><th>school</th><th>id</th><th>name</th><th>preReq</th><th>coReq</th><th>credits</th></tr>
        { courses.map((course: Course) => {
            return (<tr key={course.school}>
                <td>{course.id}</td>
                <td>{course.name}</td>
                <td>{course.desc}</td>
                <td>{course.preReq}</td>
                <td>{course.coReq}</td>
                <td>{course.credits}</td>
                </tr>);
        })}
        </table>);
}