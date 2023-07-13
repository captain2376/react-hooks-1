import React from 'react'
import { CompanyContext, UserContext } from '../App'

export const ComponentF = () => {
    return (
        <div>
            Component F
            <UserContext.Consumer>
            {
                user=> {
                    return (
                        <CompanyContext.Consumer>
                            {
                                company=><div>User Context value {user},
                                Company Context value {company}</div>
                            }
                        </CompanyContext.Consumer>
                    )
                }
   
            }
            </UserContext.Consumer>
        </div>
    )
}
