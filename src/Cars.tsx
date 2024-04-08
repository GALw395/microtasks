

type ArrayTopeCarsPropsType = {
    topCars: Array<TopeCarsPropsType>
}

type TopeCarsPropsType = {
    manufacturer: string
    model: string
}

export const Cars = (props: ArrayTopeCarsPropsType) => {



    return (
        <table>
            <tr>
                <th>manufacturer</th><th>model</th>
            </tr>

            {props.topCars.map((el, id) => {
                return (
                    <tr key={id}>
                        <td>{el.manufacturer}</td><td>{el.model}</td>
                    </tr>
                )
            })}
        </table>
    )
}