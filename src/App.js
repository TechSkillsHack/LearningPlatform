// eslint-disable-next-line
import React, { Fragment} from 'react';
import { MainHeader } from './Layouts/Header';
import { TopNav } from './Elements/Navs';
import { useAPI } from './Helpers/Hooks';
import { UserImage } from './Utils/Images';
import { Section } from './Layouts/Main';

function App() {
    const { isAuthenticated, name } = useAPI('/api/user');

    console.log(useAPI('/api/user'));

    return (
        <Fragment>
            <TopNav
                isAuthenticated={isAuthenticated}
                name={name}
            />
            <MainHeader />
            <Section xclass="w3-padding-64">
                <div className="w3-container w3-margin">
                    <div className="w3-left">
                        <h1><b>Best Courses</b></h1>
                    </div>
                    <div className="w3-right">

                    </div>
                </div>
                <div className="w3-row">
                    <div className="w3-col l3">
                         <h1>Hello</h1>
                    </div>
                    <div className="w3-col l3">
                        <h1>World Precious and Christiana are just looking at me like an alien</h1>
                    </div>
                </div>
               
            </Section>
        </Fragment>
    )
}

export default App
