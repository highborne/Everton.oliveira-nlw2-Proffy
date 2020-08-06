import React from 'react';
import {Link} from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';
import './styles.css';
import PageHeader from '../../ components/PageHeader';


function TeacherForm(){
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Que incrivel que você quer dar aulas."/>
        </div>
    );
}

export default TeacherForm;