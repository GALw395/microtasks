

type MoneyType = {
    banknote: string;
    nominal: number;
    number: string;
};

type PropsType = {
    currentMoney: MoneyType[];
    onClickFilterHandler: (filter: 'all' | 'dollar' | 'ruble') => void;
};

export const NewComponent = (props: PropsType) => {
    return (
        <>
            <ul>
                {props.currentMoney.map((el, id) => {
                    return (
                        <li key={id}>
                            <span>  {el.banknote} </span>
                            <span>  {el.nominal}  </span>
                            <span>  {el.number}  </span>
                        </li>
                    )
                })}

            </ul>
            <button onClick={() => props.onClickFilterHandler('all')}>all</button>
            <button onClick={() => props.onClickFilterHandler('dollar')}>dollar</button>
            <button onClick={() => props.onClickFilterHandler('ruble')}>ruble</button>
        </>
    )



}