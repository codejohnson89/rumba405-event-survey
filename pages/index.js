import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Form from 'react-bootstrap/Form';
import { Button, Container, Row } from 'react-bootstrap';

import emailjs from '@emailjs/browser';

import { useForm } from "react-hook-form";
import keys from '../util/email';

import Image from 'next/image';

import logo from '../public/logo.jpeg';

export default function Home() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
    let dataContent = data;
    console.log(dataContent);

    for( const property in dataContent) {
      if (dataContent[property]  === null) {
        delete dataContent[property];
      } else {
        console.log(false)
      }
    }

    emailjs.send('service_ctmzvtz', 'template_epi8d1k', dataContent, keys.user_ID)
      .then((result) => {
          alert("Thank you for filling out our survey!");
          window.location.href="https://rumba405.com/";
      },
      (error) => {
        console.log(error)
      })
  }


  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
       </Head>

    <section>
      <Container>
        <Row>
          <Image src={logo} alt="rumba 405 logo" width={100} height={100}/>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="q1">
              <Form.Label>How would you rate the overall event for Alex and Desiree and JSwuared?</Form.Label>
              <div className='inline-radio'>
                <Form.Check value={1} type='radio' label="1" inline name="group-1" id="inline-radio-1" {...register("Question-1")}/>
                <Form.Check value={2} type='radio' label="2" inline name="group-1" id="inline-radio-2" {...register("Question-1")}/>
                <Form.Check value={3} type='radio' label="3" inline name="group-1" id="inline-radio-3" {...register("Question-1")}/>
                <Form.Check value={4} type='radio' label="4" inline name="group-1" id="inline-radio-4" {...register("Question-1")}/>
                <Form.Check value={5} type='radio' label="5" inline name="group-1" id="inline-radio-5" {...register("Question-1")}/>
              </div>            
            </Form.Group>
            <Form.Group className="mb-3" controlId="q3">
              <Form.Label>Would you be interested in bringing Alex and Desiree back?</Form.Label>
              <div className='inline-radio'>
                <Form.Check value={"yes"} type='radio' label="yes" inline name="group-3" id="inline-radio-1" {...register("Question-3")}/>
                <Form.Check value={"no"} type='radio' label="no" inline name="group-3" id="inline-radio-2" {...register("Question-3")}/>
              </div> 
            </Form.Group>
            <Form.Group className="mb-3" controlId="q4">
              <Form.Label>Would you be interested in bringing JSquared back?</Form.Label>
              <div className='inline-radio'>
                <Form.Check value={"yes"} type='radio' label="yes" inline name="group-4" id="inline-radio-1" {...register("Question-4")}/>
                <Form.Check value={"no"} type='radio' label="no" inline name="group-4" id="inline-radio-2" {...register("Question-4")}/>
              </div> 
            </Form.Group>
            <Form.Group className="mb-3" controlId="q5">
              <Form.Label>What did you like or dislike about the workshops from either event?</Form.Label>
              <Form.Control as="textarea" rows={3} {...register("Question-5")}/> 
            </Form.Group>
            <Form.Group className="mb-3" controlId="q6">
              <Form.Label>What would you recommend or suggest to help the event in any way?</Form.Label>
              <Form.Control as="textarea" rows={3} {...register("Question-6")}/> 
            </Form.Group>
            <Form.Group className="mb-3" controlId="q7">
              <Form.Label>Would you be interested in a salsa workshop?</Form.Label>
              <div className='inline-radio'>
                <Form.Check value={"yes"} type='radio' label="yes" inline name="group-5" id="inline-radio-1" {...register("Question-7")}/>
                <Form.Check value={"no"} type='radio' label="no" inline name="group-5" id="inline-radio-2" {...register("Question-7")}/>
              </div> 
            </Form.Group>
            <Form.Group className="mb-3" controlId="q8">
              <Form.Label>Is there a suggested latin dance artist you would like to see come to Oklahoma?</Form.Label>
              <Form.Control as="textarea" rows={3} {...register("Question-8")}/> 
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Row>
      </Container>    
    </section>

    </div>
  )
}
