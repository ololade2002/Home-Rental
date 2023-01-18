
import React from 'react';
import './Form.css';
import { useForm} from 'react-hook-form';
import { yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
   name:yup.string().required("Name is required"),
   address:yup.string().required("Address is required"),
   price:yup.string().required("Price is required"),
   unit:yup.string().required("Enter Your Unit"),
   description:yup.string().required("Enter description"),
   city:yup.string().required("Select a city")
   })

const Form = () => {

const {register,handleSubmit,formState: { errors }, reset} = useForm({
   resolver: yupResolver(schema),
});

const onSubmitHandler = (data) => {
   console.log( data );
   reset();
 };

  return (
  <div className="form">
 <h3>Your property with us and be Confident
     that Your Room will be Filled Out!</h3>
     <div className="form-body">
        <h3>Add New Property</h3>

        <div className="info">

           <form onSubmit={handleSubmit(onSubmitHandler)} >
            <div className="ting">
           <div>
           <label>Name <span>*</span> </label>
            <input type="text" name='name' placeholder='Enter Name' {...register("name")}   />
            <p className='text'>{errors.name?.message}</p>
           </div>

           <div>
           <label>Address <span>*</span> </label>
            <input type="text" name='address' placeholder='Enter Address'  {...register("address")}   />
            <p className='text'>{errors.address?.message}</p>
           </div>

          <div>
          <label>Unit Number <span>*</span> </label>
            <input type="text" name='unit' placeholder='Enter Unit'   {...register("unit")}  />
            <p className='text'>{errors.unit?.message}</p>
          </div>

          <div>  <label>City <span>*</span> </label>
            <select name='city' {...register("city")} id="select" >
            <option placeholder='Select' value="">Select State</option>
            <option placeholder='Select' value="">Almeda</option>
            <option placeholder='Select' value="">Belmont</option>
            <option placeholder='Select' value="">Clayton</option>
            </select></div>
          
          <div> <label>State <span>*</span> </label>
           <select   id="select" >
            <option placeholder='Select' value="">Select State</option>
            <option placeholder='Select' value="">San Mateo</option>
            <option placeholder='Select' value="">Sonoma</option>
            <option placeholder='Select' value="">Marin</option>
           </select></div>

            <div>
            <label>Room Type <span>*</span> </label>
            <select   id="select"  >
            <option placeholder='Select' value="">Select Room Type</option>
            <option placeholder='Select' value="">Queen Room</option>
            <option placeholder='Select' value="">Presidential Room</option>
            <option placeholder='Select' value="">Deluxe Room</option>
           </select>
            </div>
          

        
           <div>
           <label>Price <span>*</span> </label>
            <input type="text" name='price' placeholder='Enter Price'   {...register("price")}  />
            <p className='text'>{errors.price?.message}</p>
           </div>

            <div>
            <label>Room Type<span>*</span></label>
            <select   id="select" >
            <option placeholder='Select' value="">Select Room Type</option>
            <option placeholder='Select' value="">Queen Room</option>
            <option placeholder='Select' value="">Presidential Room</option>
            <option placeholder='Select' value="">Deluxe Room</option>
           </select>
           </div>
            </div>

           <div className='description'>
           <label >Description <span>*</span></label>
           <textarea placeholder='Enter Description' name='description'   {...register("description")}  ></textarea>
           <p className='text'>{errors.description?.message}</p>
           </div>
 
         <div className="upload">
            <h4>Upload Photos</h4>
            <div>
            <h5>Drag photos here ,or <a href="http://" target="_blank" rel="noopener noreferrer">browse</a> </h5>
            <p>Supported:  JPG, JPEG, PNG</p>
            </div>
         </div>
  
           <button className='form-button'  type='submit'>Add New Property</button>
           </form>
           
        </div>

     </div>
  </div>
  )
}

export default Form;