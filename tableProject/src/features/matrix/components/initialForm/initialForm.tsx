import { useState } from "react";
import { isWithin100 } from "../../utils/matrixMath";
import type { SetUpProps } from "../../types/types";
import './initialForm.css';

export const InitialForm :React.FC<SetUpProps> = ({ onConfigSubmit }) => {
    const [m, setM] = useState<number>(0)
    const [n, setN] = useState<number>(0)
    const [x, setX] = useState<number>(0)
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if(isWithin100(m) && isWithin100(n) && x < m*n ) {
            onConfigSubmit(m,n,x)
        } else {
            alert("Please insert correct values for M and X ")
        }
    }
    return(
        <>
            <div className="form-container">
                <form onSubmit={handleSubmit} className="setup-form">
                    <div className="input-form-parent">
                        <label className="form-label">Please type rows amount</label>
                        <input 
                            className="input" 
                            type="number" 
                            min='1' 
                            max='100' 
                            required
                            name="rows"
                            placeholder="Type number"
                            onChange={e=>setM(Number(e.target.value))}
                        />
                    </div>
                    <div className="input-form-parent">
                        <label className="form-label">Please type columns amount</label>
                        <input 
                            name="columns"
                            className="input" 
                            type="number" 
                            min='1' 
                            max='100' 
                            required 
                            placeholder="Type number"
                            onChange={e=>setN(Number(e.target.value))}
                        />
                    </div>
                    <div className="input-form-parent">
                        <label className="form-label">Amount of nearest</label>
                        <input 
                            name="nearest"
                            className="input" 
                            type="number" 
                            onChange={e=>setX(Number(e.target.value))} 
                            min='0' 
                            required 
                            placeholder="Type number"
                        />
                    </div>
                    <button type="submit" className="create-btn">Create matrix</button>
                </form>
            </div>
        </>
    )
}