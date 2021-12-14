import React from 'react';
import logo from '../cavsmall1.jpg';

class Home extends React.Component {


    render() {
        const style = {
            color: "purple",
            padding: "50px"
        }
        return (
            <>
                <div class="home">
                    <img src={ logo } class="logo"/>
                    <h4>Pre-Alpha has officially wrapped up! </h4>
                    <p style={style}>We would like to extend our heartfelt gratitude to everyone that participated in Pre-Alpha. The suggestions and ideas which you have so generously provided to us will be integral to making Conquest & Virtue a truly remarkable MMORTS.

As a token of our gratitude, all Pre-Alpha testers will receive a free lifetime subscription to Conquest & Virtue. 

We have had several hundred players using the app and many more discussing Conquest and Virtue on Discord.  This input has been invaluable, and your comments have been - and will continue to be - instrumental in shaping the game.   

While we recognize that not everyone’s experience has been positive.  this is par for the course with early development.  Our goal here is not to be popular; we are here to make a game.   

We chose to open a public discord and to make a client prototype freely available.  We have been told that this is risky and not the way things should be done from a PR perspective. 

As you might have guessed, PR is not our top priority. 

We feel that player involvement during the planning stage helps to create a better game.   

With a great game, PR is easy--with a mediocre game, even the best PR will not help. 

We had originally intended to release the Alpha of Conquest & Virtue as soon as possible.  After much discussion we decided that providing a quality first release is more important than providing an early first release.   We are in this for the long haul, it is not a sprint. 

Quality is more important than punctuality so we will continue to work on the alpha until it is ready for all of you. 

At this time, the Pre-Alpha has concluded, and Alpha will begin next.  For those who wish to join, please sign up here: 
 
https://forms.gle/jnwcgsHtX7V24nSR9 * 
*participants already registered for Pre-Alpha will have automatic access to Alpha/Thanks for taking the time to play the Conquest & Virtue Pre-Alpha! 

  

Sincerely, 

  

The Conquest & Virtue Team </p>
                </div>
            </>
            );
    }


}

export default Home;