import React from 'react';
// import  input  from '../components/input';

const RegisterFrom: React.FC = () => {
  return (
    <div className="h-full items-center flex mt-20 mb-20 p-15 ">
      <div className="w-1/5 text-center"></div>
      <div className="w-3/5 text-center h-auto">
        <div className="text-lime-200">
          <div className="text-5xl font-extrabold mb-10">Sign Up</div>
          <div className="text-5xl font-extrabold mb-20 p-15">
            "Join us and start your fitness journey today!"
          </div>
        </div>

        <div className="mt-20 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6">
            <div>
              <div className="mt-2">
              <div className='text-xs text-left mb-2'>Enter your Username</div> 
                <input id="Username" name="Username" type="Username" required autoComplete="Username" className="block w-full rounded-full  text-center bg-password py-3 text-white shadow-sm  "
                placeholder='Enter username' />
              </div>
            </div>
          <div>
              <div className="mt-2">
              <div className='text-xs text-left mb-2'>Enter Firstname</div> 
              <input id="Firstname" name="Firstname" type="Firstname" required autoComplete="Firstname" className="block w-full rounded-full  text-center  bg-password py-3 text-white shadow-sm  "
                placeholder='Enter firstname' />
              </div>
            </div>
            <div>
              <div className="mt-2">
              <div className='text-xs text-left mb-2'>Enter Lastname</div> 
              <input id="Lastname" name="Lastname" type="Lastname" required autoComplete="Lastname" className="block w-full rounded-full  text-center  bg-password py-3 text-white shadow-sm  "
                placeholder='Enter lastname' />
              </div>
            </div>
            <div>
              <div className="mt-2">
              <div className='text-xs text-left mb-2'>Enter your Email</div> 
              <input id="Email" name="Email" type="Email" required autoComplete="Email" className="block w-full rounded-full  text-center  bg-password py-3 text-white shadow-sm  "
                placeholder='Enter email' />
              </div>
            </div>
            <div>
              <div className="mt-2">
              <div className='text-xs text-left mb-2'>Enter Password</div> 
              <input id="password" name="password" type="password" required autoComplete="password" className="block w-full rounded-full  text-center  bg-password py-3 text-white shadow-sm  "
                placeholder='Enter password' />
              </div>
            </div>
            <div>
              <div className="mt-2">
              <div className='text-xs text-left mb-2'>Enter Phone number</div> 
              <input id="PhoneNumber" name="PhoneNumber" type="PhoneNumber" required autoComplete="PhoneNumber" className="block w-full rounded-full  text-center  bg-password py-3 text-white shadow-sm  "
                placeholder='Enter phonenumber' />
              </div>
            </div>

            
            <form className="max-w-sm mx-auto">
                <label htmlFor="underline_select" className="sr-only">Underline select</label>
                <select id="underline_select" className="block w-full rounded-full  text-center  bg-password py-3 text-white ">
                    <option selected>Choose a gender</option>
                    <option value="US">Female</option>
                    <option value="CA">Male</option>
                </select>
</form>

          <div>
              <button
              className="w-4/5 mb-4 text-2xl mt-3 text-center rounded-full bg-lime-400 text-black hover:bg-lime-400 bg-opacity-40 hover:text-black py-2 transition-colors duration-300"
              type="button">
              Sign Up
            </button>
            </div>
        </form>
        </div>
        
      </div>
    </div>
  );
};

export default RegisterFrom;


