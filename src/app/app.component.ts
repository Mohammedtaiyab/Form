import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
   
  <section class="">
  <div class="container py-5 ">
    <div class="row justify-content-center align-items-center ">
      <div class="col-12 col-lg-9 col-xl-7">
        <div class="card shadow-2-strong card-registration" style="border-radius: 15px;">
          <div class="card-body p-4 p-md-5">
            <h3 class="mb-4 pb-2 pb-md-0 mb-md-5 blue">Get In Touch</h3>
            <form>

              <div class="row">
                <div class="col-md-6 mb-4">

                  <div class="form-outline">
                    <input type="text" id="firstName" class="form-control form-control-lg" placeholder="First Name" />
                    
                  </div>

                </div>
                <div class="col-md-6 mb-4">

                  <div class="form-outline">
                    <input type="text" id="lastName" class="form-control form-control-lg" placeholder="Last Name" />
                   
                  </div>

                </div>
              </div>

              <div class="row">
                <div class="col-md-6 mb-4 d-flex align-items-center">

                  <div class="form-outline datepicker w-100">
                    <input
                      type="email"
                      class="form-control form-control-lg"
                      id="email" placeholder="Email"
                    />
                   
                  </div>

                </div>
                <div class="col-md-6 mb-4">
                <div class="form-outline">
                <input type="text" id="phone" class="form-control form-control-lg" placeholder="Phone" />
              
              </div>

                </div>
              </div>

              <div class="row">
                <div class="col-md-12 mb-4 pb-2">

                  <div class="form-outline">
                    <input type="text" id="emailAddress" class="form-control form-control-lg"  placeholder="Address"/>
                   
                  </div>

                </div>
              
              </div>

              <div class="row">
                <div class="col-12">

                <div class="form-outline">
                    <textarea id="address" class="form-control form-control-lg"  placeholder="Type Your Message Here"></textarea>
                   
                  </div>

                </div>
              </div>

              <div class="mt-4 pt-2 text-center">
                <input class="btn btn-primary btn-lg curvebtn" type="submit" value="Submit" />
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  `
})
export class AppComponent {

}
