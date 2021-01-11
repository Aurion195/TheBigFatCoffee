import React from 'react';
import 'antd/dist/antd.css';
import axios from 'axios';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: localStorage.getItem('username')
    };
  }
 
  
  render(){
const {money} =this.props 

  return(
    <div class="card mt-5 border-5 pt-2 active pb-0 px-3">
         <div class="card-body ">
             <div class="row">
                 <div class="col-12 ">
                     <h4 class="card-title "><b>Welcome  Back</b></h4>
                 </div>
                 <div class="col">
                     <h6 class="card-subtitle mb-2 text-muted">
                         <p class="card-text text-muted small "> <img src="https://img.icons8.com/metro/26/000000/star.png" class="mr-1 " width="19" height="19" id="star"/> <span class="vl mr-2 ml-0"></span>Last connection le<span class="font-weight-bold"> 23 Dec , 2020</span> </p>
                     </h6>
                 </div>
             </div>
         </div>
         <div class="card-footer bg-white px-0 ">
             <div class="row">
                 <div class=" col-md-auto "> <a href="#" class="btn btn-outlined btn-black text-muted bg-transparent" data-wow-delay="0.7s"><img src="https://img.icons8.com/ios/50/000000/settings.png" width="19" height="19"/> <small>SETTINGS</small></a> <i class="mdi mdi-settings-outline"></i> <a href="#" class=" btn-outlined btn-black text-muted"><img src="https://img.icons8.com/metro/26/000000/link.png" width="17" height="17" id="plus"/> <small>PROGRAM LINK</small> </a> <a href="#" class="btn btn-outlined btn-black text-muted "><img src="https://img.icons8.com/metro/26/000000/more.png" width="20" height="20" class="mr-2 more"/><small>MORE</small></a> <span class="vl ml-3"></span> </div>
                 <div class="col-md-auto ">
                     <ul class="list-inline">
                         <li class="list-inline-item"> <img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1573035860/Pra/Hadie-profile-pic-circle-1.png" alt="DP" class=" rounded-circle img-fluid " width="35" height="35"/> </li>
                         <li class="list-inline-item"> <img src="https://img.icons8.com/ios/50/000000/plus.png" width="30" height="30 " class="more"/> </li>
                         <li class="list-inline-item"> <img src="./src/img/wallet.png" width="30" height="30 " class="more"/><span class="btn btn-outlined btn-black text-muted bg-transparent" > ${money}</span> </li>
                     </ul>
                 </div>
             </div>
         </div>
     </div>

  );
  }

  
}

export default Profile;


