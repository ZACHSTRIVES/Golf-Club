import React, { useState } from 'react';
import '../Shared/Services.css';
import { useTranslation } from "react-i18next";

// -----------------------------COMPONENTS-------------------------------
import Intro from '../Shared/Intro/Intro';
import HowItWorks from '../Shared/HowItWorks/HowItWorks';
import Framework from '../Shared/Framework/Framework';
import Keypoints from '../Shared/Keypoints/Keypoints';
import QA from '../Shared/QA/QA';

// -----------------------------ICON / IMAGE-------------------------------
import { AiOutlineCheckCircle } from 'react-icons/ai';
import Astronaut from '../../../static/img/Astronaut.png'


export default function RemoteLearning() {
    const { t, i18n } = useTranslation();
    const remoteLearning = t('remoteLearning', {returnObjects: true });
    return (
        <div className="services">
            <div className="section">
                <Intro data={remoteLearning.Intro} graphic={Astronaut} />
            </div>
            <div className="section">
                <Framework data={remoteLearning.Framework} ver={1}/>
            </div>
            <div className="section" style={{padding:'0px'}}>
                <Keypoints  heading={remoteLearning.Keypoints.h0} 
                            select={[16,17,18,19,20,11,21]}
                            price={remoteLearning.Keypoints.price}/>
            </div>
            <div className="section">
                <HowItWorks data={remoteLearning.HowItWorks} icon={(<AiOutlineCheckCircle size='25px' style={{position: 'relative', top: '7px', left: '-10px', opacity: '0.7'}}/>)} />
            </div>
            <div className="section">
                <QA data={remoteLearning.QA} addQA={remoteLearning.addQA[i18n.language]}/>
            </div>
        </div>
    )
}