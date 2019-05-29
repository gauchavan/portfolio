import React, {Component} from 'react';
import mojs from 'mo-js';
import { SectionOneContainer, Title, Span, Button } from './../Styled/SectionOneStyles';
//import {COLORS} from './../Constants/COLOR'


  
const CIRCLE_OPTS = {
    left: 0, top: 0,
    scale: { 0: 1 },
}
  
class SectionOne extends Component {

    componentDidMount(){
        this.initAnimate();
       // setTimeout(this.setState({position: 1}), 3000);
    }

    initAnimate(){
        this.largeCircle = new mojs.Shape({
            ...CIRCLE_OPTS,
            fill:       'none',
            stroke:     'white',
            strokeWidth: 4,
            opacity:    { .25 : 0 },
            radius:     250,
            duration:   600,
            });
            
        this.smallCircle = new mojs.Shape({
            ...CIRCLE_OPTS,
            fill:       'white',
            opacity:    { .5 : 0 },
            radius:     30,
        });

        this.largeBurst = new mojs.Burst({
            left: 0, top: 0,
            count:          4,
            radius:         0,
            angle:         45,
            radius:        { 0: 450  },
            children: {
              shape:        'line',
              stroke:       '#4ACAD9',
              scale:        1,
              scaleX:       { 1 : 0 },
              radius:       100,
              duration:     450,
              isForce3d:    true,
              easing:       'cubic.inout'
            }
        });

        this.burst1 = new mojs.Burst({
            left: 0, top: 0,
            count:          8,
            radius:         { 50: 150 },
            children: {
              shape:        'line',
              stroke:       [ 'white', '#FFE217', '#FC46AD', '#D0D202', '#B8E986', '#D0D202' ],
              scale:        1,
              scaleX:       { 1 : 0 },
              // pathScale:    'rand(.5, 1.25)',
              degreeShift:  'rand(-90, 90)',
              radius:       'rand(20, 40)',
              //duration:     10,
              delay:        'rand(0, 150)',
              isForce3d:    true
            }
        });
    }

    animate = (e) => {
        this.burst1
        .tune({ x: e.pageX, y: e.pageY })
        .generate()
        .replay();
    
        this.largeBurst
          .tune({ x: e.pageX, y: e.pageY })
          .replay();
        
        this.largeCircle
          .tune({ x: e.pageX, y: e.pageY })
          .replay();
        
        this.smallCircle
          .tune({ x: e.pageX, y: e.pageY })
          .replay();
    
    }

    render(){
        return (
            //<SectionOneContainer onMouseOver={(event) => this.animate(event)}>
            <SectionOneContainer>
                    <Title>Hello, I'm <Span>Gauri Chavan</Span></Title>
                    <Title>I'm a full-stack web developer</Title>
                    <Button>Find my work</Button>
            </SectionOneContainer>
         );
    }
    
};

export default SectionOne