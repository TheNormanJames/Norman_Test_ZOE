export default function AdvisorCard ({advisor}){
    return (
        <>
        <div className="containerAdvisor">

        
        <p>{advisor.name}</p>
        <p>{advisor.income}</p>
        </div></>
    )
}