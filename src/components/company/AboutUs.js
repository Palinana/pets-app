import React from 'react';

const AboutUs = () => {
    return (
        <div class="container">
            <section class="page-title py-lg">
                <h1 class="text-lg">About Us</h1>
            </section>

            <section class="grid-col-2 grid-reversed py-lg">
                <img src="https://www.eulerity.com/static/media/euler.828aca59.png" alt="" />

                <div class="box-text">
                    <h2 class="text-md">Why are we called “Eulerity”?</h2>
                    <p class="text-sm paragraph">
                        We named the company after Leonhard Euler, one of the most eminent mathematicians 
                        of the 18th century. He made many influential discoveries and introduced much of 
                        the mathematical terminology and notation we know today, like mathematical functions.
                    </p>

                    <p class="text-sm paragraph">
                        We wanted to pay tribute to his contributions by alluding to our platform’s 
                        state-of-the-art technology and algorithms that allow people with no knowledge of 
                        digital marketing to run successful campaigns that drive business results.
                    </p>
                </div>
            </section>

            <section class="grid-col-2 py-lg">
                <img src="https://www.eulerity.com/static/media/team2.f556b92d.JPG" alt="" />
                
                <div class="box-text">
                    <h2 class="text-md text-center">What makes us different?</h2>

                    <div>
                        <div>
                            <h3 class="text-xs">Psychological safety</h3>
                            <p class="text-sm paragraph">
                                First on the list, is safety. Our high performing teams needs an environment 
                                that feels judgment-free, so that everyone can share their thoughts without 
                                fear. Our team members feel valued, as their thoughts and input matter and 
                                contribute to the bigger picture, since effective teams actively solicit 
                                input and opinions from their members.
                            </p>
                        </div>

                        <div>
                            <h3>Dependability</h3>
                            <p class="text-sm paragraph">
                                All our team members have roles and responsibilities that allow team-related 
                                work to be transparent. Each team member not only understands their own work 
                                and expectations but also what their fellow team members are working on. 
                                When concrete plans are in place, it is clear and easy to see what progress 
                                is being made and what next step the team is currently taking.
                            </p>
                        </div>

                        <div>
                            <h3>Impact and Gratitude</h3>
                            <p class="text-sm paragraph">
                                Our team always has the larger vision of the team’s direct contribution to the 
                                organization’s larger, long-term goals to demonstrate the importance of their work. 
                                Our teams aren’t afraid to show gratitude and appreciation to everyone involved. 
                                By the end of any meeting, our high-performing teams understand how and what to do 
                                to achieve their goals.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutUs;
