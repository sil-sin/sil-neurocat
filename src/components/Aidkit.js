import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { send } from 'emailjs-com';
import { init } from 'emailjs-com';
init("user_CtWs1YzgidOw4pPwk0MKF");

function Aidkit(props) {
    const [open, upOpen] = useState(false)
    const [error, upError] = useState(false)
    const [toSend, setToSend] = useState({
        from_name: null,
        to_name: null,
        message: null,
        from_email: null,
        phone: null,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, phone, message } = e.target
        console.log(email.value.includes('@'))
        console.log(name.value, email.value, phone.value, message.value)
        if (!name.value || !email.value || !email.value.includes('@') || !phone.value || !message.value) {
            console.log('empty')
            upError(true)
            setToSend({
                from_name: null,
                to_name: null,
                message: null,
                from_email: null,
                phone: null,
            })

        } else {
            console.log('senidng')
            send(

                'service_6xkxi2b',
                'template_387iwvd',
                toSend,
                'user_CtWs1YzgidOw4pPwk0MKF'
            )
                .then((response) => {
                    console.log('SUCCESS!', response.status, response.text);
                })
                .catch((err) => {
                    console.log('FAILED...', err);
                });
        }
    };


    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };
    const handleClickOpen = () => {
        upOpen(true);
        upError(false)
    };

    const handleClose = () => {
        upOpen(false);
    };
    return (
        <div>
            <nav className='aidkitNav'>
                <Link style={{ textDecoration: 'underline' }} href='#'>What is aidkit?</Link><br />
                <Link href='#'>Approach</Link><br />
                <Link href='#'>Pricing</Link><br />
                <Link href='#'>Login</Link><br />
                <Link href='#'>FAQ's</Link><br />
            </nav>
            <header>
                <div>
                    <img src='https://www.neurocat.ai/wp-content/uploads/2018/11/addkit-hori.png'
                        alt='aidikitimg' />
                    <div id='headerText'>
                        <h5>aidikit and how it can help companies</h5>
                        <p>Is an open source AI analysis, optimization and debugging platform. It will support prototyping, deployment and operation.

                            Save time, money and stress during your AI analysis by using the biggest collection
                            of optimization, vulnerability detection and debugging tools.</p>
                    </div>
                </div>
                <video controls width='70%'>

                    <source src="" type="video/webm" />

                    Sorry, your browser doesn't support embedded videos.
                </video>
            </header>
            <section id='section1'>
                <div className='section1' data-aos="fade-left">
                    <img src='../test.png' alt='Testbed Monitor img' />
                    <h3>Testbed & Monitor</h3>
                </div>
                <div className='section1' data-aos="fade-left">
                    <h3>AddOn Protect & Explain</h3> <img src='../addon.png' alt='AddOn Protect & Explain' />
                </div>
            </section>
            <section className='section2' >
                <img id='aidkitFeatures' src='../robustness.png' alt='aidkit robustness' data-aos="fade-bottom" />
                <img id='aidkitFeatures' src='../transparency.png' alt='aidkit transparency' data-aos="fade-bottom" />
                <img id='aidkitFeatures' src='../performance.png' alt='aidkit functionality' data-aos="fade-bottom" />
                {/* <h2>Why Choose aidkit?</h2>*/}
                <img id='whyAidkit' src='../whyaidkit.png' alt='whyInfograph' data-aos="fade-bottom" />
                <h4>How does it work?</h4>
                <img id='howAidkitWorks' src='' alt='' data-aos="fade-bottom" />
                <h4>Current Customers</h4>
                <img id='aidkitCustomers' src='' alt='' data-aos="fade-bottom" />
                <h4>Pricing</h4>
                <Button className='myBtn' variant="outlined" color="primary" onClick={handleClickOpen}>
                    Contact
                </Button>
                <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                    <form onSubmit={handleSubmit} >
                        <DialogTitle id="form-dialog-title">Get in touch</DialogTitle>
                        <DialogContent>
                            <TextField autoFocus onChange={handleChange} margin="dense" id="name" label="Name *" type="text" name='from_name' fullWidth />
                            <TextField autoFocus onChange={handleChange} margin="dense" id="email" label="Email Address *" type="email" name='from_email' fullWidth />
                            <TextField autoFocus margin="dense" id="phone" onChange={handleChange} label="Phone Number" type="text" name='phone' fullWidth />
                            <TextField autoFocus multiline margin="dense" id="message" label="Message *" onChange={handleChange} type="text" name='mesage' fullWidth />

                        </DialogContent>
                        <DialogActions>

                            <Button onClick={handleClose} type='submit' color="primary">
                                Send
                            </Button>
                        </DialogActions>
                    </form>
                </Dialog>
                <h4></h4>
                <img src='../faq.png' alt='faq'></img>
            </section>
            {error && <div id='error'>Please fill all the required* fields!</div>}

        </div>
    )
}

export default Aidkit;