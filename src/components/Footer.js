import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@material-ui/core'
import { Email, Facebook, Instagram, Phone, PinDrop, Twitter } from '@material-ui/icons'
import React, { useState } from 'react'
import { send } from 'emailjs-com';
import { init } from 'emailjs-com';
init(process.env.local.REACT_APP_USER);

export default function Footer(props) {

    const { open, handleClickOpen, handleClose, upError, error } = props
    const [condition, upCondition] = useState(false)
    const [toSend, setToSend] = useState({
        from_name: null,
        to_name: null,
        message: null,
        from_email: null,
        phone: null,
        role: null,
        interests: null,
    });

    const onSubmit = (e) => {
        e.preventDefault();
        const { name, email, phone, role } = e.target
        console.log(email.value.includes('@'))
        console.log(name.value, email.value, phone.value, role.value)
        if (!name.value || !email.value || !email.value.includes('@') || !phone.value || !role.value) {
            console.log('empty')
            upError(true)
            setToSend({
                from_name: null,
                to_name: null,
                message: null,
                from_email: null,
                phone: null,
                role: null,
                interests: null,
            })

        } else {
            console.log('senidng')
            send(

                'service_6xkxi2b',
                'template_q60uvek',
                toSend,
                process.env.REACT_APP_USER

            )
                .then((response) => {
                    console.log('SUCCESS!', response.status, response.text);
                })
                .catch((err) => {
                    console.log('FAILED...', err);
                });
        }
    };
    const handleCondition = (e) => {
        console.log(condition, e)
        if (e.target.value === 'none') {
            upCondition(false)
        } else {
            upCondition(true)
        }
    }

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

    return (
        <div className='footer'>
            <div id='contactDetails'>
                <h4>Contact Deatails</h4>
                <ul><li><PinDrop /><a href="https://www.google.de/maps/place/Rudower+Chaussee+29,+12489+Berlin" target="_blank" rel="noreferrer">IGZ Berlin-Adlershof,
                    Rudower Chaussee 29<br />12489 Berlin, Germany</a></li>
                    <li><Email /> <a href="mailto:meow@neurocat.ai" target="_blank" rel="noreferrer">meow@neurocat.ai</a></li>
                    <li><Phone />   <a href='tel:+493034065918'>+49 (0) 30 340 65 918
                    </a> <br /><a href='skype:neurocat GmbH?call' target="_blank" rel="noreferrer">Skype</a></li>
                    <a href='https://www.facebook.com/neurocatai' target="_blank" rel="noreferrer"><Facebook /></a>
                    <a href='http://twitter.com/NeurocatGmbH' target="_blank" rel="noreferrer"><Twitter /></a>
                    <a href='http://instagram.com' target="_blank" rel="noreferrer"><Instagram /></a>

                </ul>
            </div>
            <Button id='contact' className='myBtn' variant="outlined" color="primary" onClick={handleClickOpen}>
                Contact
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <form onSubmit={onSubmit}>
                    <DialogTitle id="form-dialog-title">Get in touch</DialogTitle>
                    <DialogContent>
                        <TextField onChange={handleChange} autoFocus margin="dense" id="name" label="Name *" name='from_name' type="text" fullWidth />
                        <TextField onChange={handleChange} autoFocus margin="dense" name='from_email' id="email" label="Email Address *" type="email" fullWidth />
                        <TextField onChange={handleChange} autoFocus margin="dense" id="phone" label="Phone Number" type="number" name='phone' fullWidth />
                        <TextField onChange={handleChange} autoFocus margin="dense" id="role" label="Role *" type="text" name='role' fullWidth />
                        <label>Interest</label><br />
                        <select onChange={handleCondition} autoFocus margin="dense" id="interest" label="Interest" name='interests' type="text" fullWidth>
                            <option selected value="none">Select Interests</option>
                            <option onChange={handleChange} value>Option 1</option>
                            <option onChange={handleChange} value >Option 2</option>
                        </select>

                        {condition ? (<><TextField onChange={handleChange} autoFocus margin="dense" id="interest1" label="How are you currently testing your models?  *" type="text" fullWidth />
                            <TextField onChange={handleChange} autoFocus margin="dense" id="interest2" label="How often do you test your models?*" type="text" fullWidth />
                        </>) : (<p></p>)}
                    </DialogContent>
                    <DialogActions>

                        <Button onClick={handleClose} type='submit' color="primary">
                            Send
                        </Button>
                    </DialogActions>
                </form>
            </Dialog>
            {error && <div id='error'>Please fill all the required* fields!</div>}
        </div >
    )
}
