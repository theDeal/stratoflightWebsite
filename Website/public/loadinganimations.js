gsap.from(".topbottom", {duration: 1, y: -20, opacity: 0});
gsap.from(".bottomtop", {duration: 1, y: 20, opacity: 0});

gsap.to(element, {duration: 1, y: 50, delay: 1});
gsap.to(element, {duration: 1, opacity: 0, delay: 2});