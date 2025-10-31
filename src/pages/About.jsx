import React from 'react'
import WithUs from '../components/WithUs'
import NewArrivals from '../components/NewArrivals.jsx'

export default function About() {
  return (
    <div>
       <section className="inner_page_head">
         <div className="container_fuild">
            <div className="row">
               <div className="col-md-12">
                  <div class="full">
                     <h3>About us</h3>
                  </div>
               </div>
            </div>
         </div>

      </section>
      <WithUs />
      <NewArrivals />
    </div>
  )
}
