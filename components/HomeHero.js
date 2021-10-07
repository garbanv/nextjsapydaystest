import React from 'react'

export default function HomeHero() {
    return (
        <div class="px-4 py-5  text-center">
        <img class="d-block mx-auto mb-4" src="https://dummyimage.com/400x400/000/fff&text=Logo" alt="" width="72" height="57"/>
        <h1 class="display-5 fw-bold text-white">Welcome to Apidays landscape</h1>
        <div class="col-lg-6 mx-auto">
          <p class=" mb-4 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi eos corporis optio vero, id harum quibusdam aspernatur labore possimus explicabo expedita, consequatur accusantium illum inventore veniam molestias tenetur ea ad.</p>
          <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" class="btn btn-dark btn-lg px-4 gap-3">Will do something</button>
         {/*    <button type="button" class="btn btn-outline-secondary btn-lg px-4">Secondary</button> */}
          </div>
        </div>
      </div>
    )
}
