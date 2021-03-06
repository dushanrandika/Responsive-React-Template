import React, { Component } from 'react';

class FirstSection extends Component {
  render() {
    return (
      <div id="why-fitness-gym" class="container" style={{  borderBottom: '1px solid #000000', width: '100%'}}>
            <div class="row">
            <div class="col-12">
                    <div class="section-spacing">
                    </div>
                </div>
                <div class="col-12">
                    <div class="section-heading">
                        <h6>Fitness Gym</h6>
                        <h2>Why choose Fitness Gym?</h2>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-12 col-lg-8">
                    <div class="row">
                        
                        <div class="col-12 col-lg-6">
                            <div class="about-text">
                                <p>Donec id mattis est. Proin nunc sapien, gravida ut sapien ut, ultrices faucibus sapien. Proin vehicula varius ex, vel feugiat massa scelerisque id. Nullam vulputate a lectus non molestie. Duis at lobortis neque, in maximus leo. Donec nec blandit ex, in finibus tortor. Curabitur aliquet fermentum ultrices.</p>
                            </div>
                        </div>
                        
                        <div class="col-12 col-lg-6">
                            <div class="about-text">
                                <p>Proin nunc sapien, gravida ut sapien ut, ultrices faucibus sapien. Proin vehicula varius ex, vel feugiat massa scelerisque id. Nullam vulputate a lectus non molestie. Duis at lobortis neque, in maximus leo. Donec nec blandit ex, in finibus tortor. Curabitur aliquet fermentum ultrices.</p>
                            </div>
                        </div>
                        
                        <div class="col-12">
                            <div class="about-btn-group mt-50">
                                <a href="#" class="btn fitness-btn mr-3" style={{ backgroundColor:'#2196f37d', color:'#000', fontWeight:'600', boxShadow: '0 2px 0.01px rgba(0,0,0,0.19), 0 3px 3px rgba(0,0,0,0.23)'}}>Get a membership</a>
                                <a href="#" class="btn fitness-btn btn-2" style={{ backgroundColor:'#2196f37d',color:'#000', fontWeight:'600', boxShadow: '0 2px 0.01px rgba(0,0,0,0.19), 0 3px 3px rgba(0,0,0,0.23)'}}>Find out more</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-lg-4">
                    <div class="about-thumb">
                        <img src="https://colorlib.com/preview/theme/fitnessgym/img/bg-img/man.png" alt="" class="team" />
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default FirstSection;
