import { sampleProjects } from "../Sampledata/data";
import "../Styles/Leaders.css";

export default function Leaders(){
    return (
        <div className="leaders-tablecontainer">
            <h3>Leaders</h3>
            <table className="leaderstable">
                <thead>
                 <tr>
                   <th>Name</th>  
                   <th>Role</th>
                 </tr>
               </thead>
                <tbody>
                    {sampleProjects.map((project)=>{
                        return (
                            <tr>
                                <td>{project.teamLeader.name}</td>
                                <td>{project.teamLeader.role}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

        </div>
    )
}