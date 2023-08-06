import React, { useEffect, useState } from 'react'
import './Login.css'
import {useForm} from 'react-hook-form'

const Login = () => {

  const {register,formState:{errors},handleSubmit}=useForm();

  const [toogle,setToogle]=useState(true);

  const [countries,setCountries]=useState([])

  const [data,setData]=useState()

  useEffect(()=>{
    getCallingCode()
  },[])

  const onSubmit=(data)=>{
    console.log(data)
    setData(data)
  }

  const getCallingCode=async()=>{
    await fetch("https://restcountries.com/v3.1/lang/spanish")
                .then(Response=>Response.json())
                .then(data=>{
                 setCountries(data);
                })
  }

  const handlerToogle=(e)=>{

    e.preventDefault();
    if(toogle){
      setToogle(false)
    }else{
      setToogle(true)
    }
  }




  return (
    <div className='w-100 vh-100 Login__background'>
        <div className="container h-100">
          <div className="row h-100 ">
            <div className="col-12 d-flex justify-content-center align-items-center">
            {toogle  ? 
              
              <section className='Login__glass'>
              <div className="container-fluid ">
                <div className="row w-100 ">
                  <form action="" className='container-fluid'>
                    <div className='row mt-3'>
                      <div className="col-12 d-flex justify-content-center">
                        <h1>Inicia Sesion</h1>               
                      </div>
                    </div>
                    <div className="row">     
                    </div>
                    <div className="row mt-5">
                    <div className="col-12 d-flex justify-content-center">
                     <form action="" className='container-fluid'>
                        <div className="row">
                            <div className="col-12 d-flex justify-content-center ">
                                <div className='w-75'>
                                    <label htmlFor="" className='w-100'>Correo:</label>
                                    <input type="email"  className='w-100 rounded'/>
                                    <div className='mt-3 '>
                                      <label htmlFor="" className='w-100'>Contraseña:</label>
                                      <input type="text" className='w-100 rounded'/>
                                    </div>        
                                    <button className='btn btn-info mt-3 w-100 rounded-pill'>Iniciar sesion</button>
                                </div>     
                                        
                            </div>
                                                    
                        </div>
                       <div className="row  d-flex justify-content-center mt-3">
                        <div className="col-12 w-75">
                        <p className='Login__text--justify'>¿No tienes una cuenta aun? da <u><a href="" onClick={e=>handlerToogle(e)}>click aqui</a></u>  y crea una cuenta para mandar mensajes en automatico y programarlos</p>
                        </div>
                       
                      </div>    
                     </form>
                   
                      
                    </div>
                                               
                    </div>
                  </form>
           
                </div>
              </div>              
            </section>
              :  
              <section className='Login__glass'>
              <div className="container-fluid ">
                <div className="row w-100 ">
                  <div  className='container-fluid' >
                    <div className='row mt-3'>
                      <div className="col-12 d-flex justify-content-center">
                        <h1>Registrate</h1>               
                      </div>
                    </div>
                    <div className="row">     
                    </div>
                    <div className="row mt-5">
                    <div className="col-12 d-flex justify-content-center">
                     <form  className='container-fluid' onSubmit={handleSubmit(onSubmit)}>
                        <div className="row">
                            <div className="col-12 d-flex justify-content-center ">
                                <div className='w-75'>
                                    <label htmlFor="" className='w-100'>Nombre:</label>
                                    <input type="text"  className='w-100 rounded' {...register('Nombre',{required:true})}/>
                                    {errors.Nombre?.type === 'required' && <p role="alert" >Nombre es requerido</p>}
                                    <div className='mt-3'>
                                      <label htmlFor="" className='w-100 '>Nickname:</label>
                                      <input type="text"  className='w-100 rounded' {...register("Apodo")}/>
                                    </div>
                                    <div className='mt-3'>
                                      <label htmlFor="" className='w-100 '>Correo:</label>
                                      <input type="email"  className='w-100 rounded' {...register('Correo')}/>
                                    </div>
                                    <div className='mt-3'>
                                      <label htmlFor="" className='w-100 '>Contraseña:</label>
                                      <input type="password"  className='w-100 rounded' {...register('Contraseña',{minLength:8})}/>
                                      {errors.Contraseña?.type==='minLength' && <p role='alert'>La contraseña tiene que ser de minimo 8 Caracteres</p>}
                                    </div>
                                          
                                    <div className='mt-3 Register__cel'>
                                      <select name="" id="" className='w-100 rounded mt-2' {...register('Prefijo')}>
                                      {countries.map((country,index)=>{
                                        const result=country.idd.root+country.idd.suffixes[0];

                                        const flag=country.flags.svg
                      
                            
                      
                                        return <option value={result} key={index} >{ country.name.common+result}</option>
                                      })}
                                      </select>
                                      <input type="tel" className='w-100 rounded mt-2' maxLength={10} {...register('Telefono')}/>
                                    </div>     
                                    <button className='btn btn-info mt-3 w-100 rounded-pill' type='submit'>¡Registrarme!</button>
                                </div>     
                                        
                            </div>
                                                    
                        </div>
                       <div className="row  d-flex justify-content-center mt-3">
                        <div className="col-12 w-75">
                        <p className='Login__text--justify'>¿Ya tienes cuenta? da <a href=""><u onClick={e=>handlerToogle(e)}>click aqui</u></a>  y inicia sesion para mandar mensajes en automatico y programarlos</p>
                        </div>
                       
                      </div>    
                     </form>
                   
                      
                    </div>
                                               
                    </div>
                  </div>
           
                </div>
              </div>              
            </section>}
          
          
            </div>
          </div>
        </div>
    </div>
  )
}

export default Login