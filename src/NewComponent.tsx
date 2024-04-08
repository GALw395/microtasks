
type ArrayStudentPropsType = {
    students: StudentPropsType[]
}

type StudentPropsType = {
    id: number 
    name: string 
    age: number
}

export const NewComponent = (props: ArrayStudentPropsType) => {


    
    return (
        <ul>
            {props.students.map((el) => {
                return (
                    <li key={el.id}>
                        <span>{el.name}</span>
                        <span>age: {el.age}</span>
                    </li>
                )
            })}
        </ul>
    )
}