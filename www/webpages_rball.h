static const char mainPage[] PROGMEM = u8R"(

  <!DOCTYPE html>
  <html>
  <head>
    <meta charset='UTF-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>旗標科技 R-Ball 球型機器人</title>
    <style type='text/css'>
      body {
        /*
        background: rgb(20, 20, 20);
        background: -webkit-radial-gradient(rgb(100, 100, 100), rgb(50, 50, 50), rgb(20, 20, 20));
        background: -o-radial-gradient(rgb(100, 100, 100), rgb(50, 50, 50), rgb(20, 20, 20));
        background: -moz-radial-gradient(rgb(100, 100, 100), rgb(50, 50, 50), rgb(20, 20, 20));
        background: radial-gradient(rgb(100, 100, 100), rgb(50, 50, 50), rgb(20, 20, 20));
        */
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFIAAABSCAYAAADHLIObAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGpWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAxOC0xMC0wOFQxNTowMDo1MiswODowMCIgeG1wOk1vZGlmeURhdGU9IjIwMTgtMTAtMDhUMTU6MjA6NTErMDg6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMTgtMTAtMDhUMTU6MjA6NTErMDg6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MWNhM2FmODItOTNhNS05NDRlLTgxYjQtZTY0NTQwMTc0ZjJlIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjI1MjYwZDQwLTczOTgtODM0Yi05YjU4LWQ4ZjU5Y2NhMDUzZCIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjI1MjYwZDQwLTczOTgtODM0Yi05YjU4LWQ4ZjU5Y2NhMDUzZCI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MjUyNjBkNDAtNzM5OC04MzRiLTliNTgtZDhmNTljY2EwNTNkIiBzdEV2dDp3aGVuPSIyMDE4LTEwLTA4VDE1OjAwOjUyKzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo0MDdhNzRhOC0wNTg0LWM0NDktODI4NS1hMmZiOTcyYjI4OGIiIHN0RXZ0OndoZW49IjIwMTgtMTAtMDhUMTU6MTkrMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjFjYTNhZjgyLTkzYTUtOTQ0ZS04MWI0LWU2NDU0MDE3NGYyZSIgc3RFdnQ6d2hlbj0iMjAxOC0xMC0wOFQxNToyMDo1MSswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5azyLHAAAE90lEQVR4nO2dQWvjSBSEPycDDgljQ2AOxjOnyWnmt/nX+LdlTgkszBgdAgZ7cUhgg/bQr5VWW7JkRZbKuyrIJW51l6v7Sa3Xr/AoTVP+6xgtVhNgDFxFH70Ar+lyvv3wGE2FHC1WY2ACTIFr4Kak6Q54BjbANl3OXxsNeDy3W+CL8doBb0As2AS4DNo8AesmHI8W0mZ3ZkSbYA0kbayCGBG3Jxtrmy7n/1Rc9wknqhf/aI61hTSS32zANrAFfrcSVk6I77joSHAiHBSvoq+Z/W2Axzp9VQppHX+1jk+BBPjzgS9+C9xxxJeu2W84OQ/pcr4+2P6QkNbZD8rvf21hB/w6VoTRYvUNN8GVX7QpgolK0uX8d2m7MiFHi9UN8BN3M+4Cb8B9upzv6jQeLVZ3uHta7WuaItBinS7nD0VtLkou/ES3ImJj/bSxD8JWYiciAtgY98Ctjb2HPSGDcO5SRI9L4MchMS3UZnQkokcg5sw45FC0Ir9y+nviIdwYhz2YwHe4e2JnInrYmA/AXTzZOSGDfVjfmBmXGN+BzakeLHVgY2+MS4Z4RRbGf0/IcTFhp8BjP3RyeASm4WRnQto/29pst4FJtCpnfGCj3SaMQ0IQveGKVAjpGDPIvTsn/dLJIcE9xcdgQgZE1XAbcHtSWI0exuUJ082vSKWQjjHhPZGghjWOWybktD8ulZjitkStZ4tawBbbKnohr/vjUonPwE4prD2M0260WE28kH1uwKtwhXsPV8UbMC581xaEYlh7bIGrcxFSHoOQLWEQsiWci5Dq+9wXL2TnKakj8EI/udG6uARevZDPfTKpwN/ATZ3MedcwTjfpcr71Qm76JFSBDS5iFMN7gkWzF1J9n5YlB8TgCxGckFaiIZkUCLh9UQpv45IlU8KntlKuzyOB3EQr5UxnBHVCmZBWOqIU4tuonCXBneX0viqDspZs8cX7yNJKgh6Q42Ki7h069QR/CJdNdE5I+0AhxMsqwfyhU28PHht77xCu6M3mD/1u0HfGYQ+W//Pnyp2n/mxMf66ey4/uCWkNftFPDvCNimIqO1dOcOUtnYkZ1P8kRefqhe/a9kXu6VZMX0RVmQm3qrA1HYkZFVEVPkeGsr7qMT5W1hd0dPJC03Q5/6vpxWdRaBp1PJQ+H7puKMbvuBi/YPDQHvKZfQ+LxwsuFTbYQxSINuTY2UQfJWSfodOQYxM04lZLSIWbeY1+e30Y1tn+SGwvKvrp3QdUtSGX2fCWXCvzwnDIZyPlYzlwjYQPqMxnI+djifjJ+YCKfDaSPpaAn6QPKLaHyPpYAkj6gOIVKetjAW0fUGwPkfWxGGR9QLE9RNbHou4Diu0hCgdfHjkfCxohHWPPsCTtYzkDH1AmpLqPRSmkY0zgXUh1H4u6D4gLu2FK+1hw+URVXINbkWP0fSxlSVkFZM6vKzTD2kOZW4ZzKcaXxyBkSxiEbAkXuFM0+X2aOi6AV/R9LC99kzgA52qwUzJpHwvu3FkVz/B+j1T3saj7gDIh1X0synvJLbwLKe1jOQMf0J5hSSnnl/OxoJUr9Si0h0j7WNR9QLFhSdbHYpD1AcVvNrI+FtD2AcWGJVkfSwBJH1CRz0bSxxLwk/QBlfls5HwsET85H9BQ1lcPzcv6sgZDoWktH9BQ+lyOdkufc42HYvzycf8n9pCT/0xMY8NSrpMOfnhHHf8CwjSGcvO9fvMAAAAASUVORK5CYII=);

        font-family: Microsoft JhengHei;
      }

      h1 {

        font-size: 22px;
        color: #834633;
        text-align: center;
        margin-top: 10px;
        margin-bottom: 5;
      }

      img.phone {
        opacity: 1;
        filter: alpha(opacity=100);
        /* For IE8 and earlier */
      }

      img.flashlight {
        opacity: 0.3;
        filter: alpha(opacity=30);
        /* For IE8 and earlier */
      }
  /*
      p.ctlArea {
        margin-bottom: -1px;
        font-size: 13px;
        text-align: center;
        background-color: #09b4b7;
        color: rgb(240, 240, 240);
        width: 67px;
        padding: 4px;
        margin-left: 5px;
        margin-right: auto;
      }
  */

      div.center {
        margin: auto;
        width: 80%;
        /*border-top: 2px solid gray;
        border-bottom: 2px solid gray;
        */
        padding: 5px;
        text-align: center;
      }

      div.setArea {
        padding: 5px;
        border-radius: 20px;
        text-align: center;
        background-color: white;

      }

      div.bannerArea {
        padding: 0px;
        text-align: center;
      }

      .switch {
        position: relative;
        vertical-align: 50%;
        display: inline-block;
        width: 60px;
        height: 34px;
      }

      .switch input {
        display: none;
      }

      .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #f0288c;
        -webkit-transition: .4s;
        transition: .4s;
      }

      .slider:before {
        position: absolute;
        content: "";
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        -webkit-transition: .4s;
        transition: .4s;
      }

      input:checked+.slider {
        background-color: #2196F3;
      }

      input:focus+.slider {
        box-shadow: 0 0 1px #2196F3;
      }

      input:checked+.slider:before {
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
      }

      /* Rounded sliders */
      .slider.round {
        border-radius: 34px;
      }

      .slider.round:before {
        border-radius: 50%;
      }


      #canvas {

        height: 80px;
        width: 100%;
        display: block;
        z-index: -99;
      }

      #joystick-main {
          padding: 20px;
        position: relative;
        display: flex;
        justify-content: center;
        margin: auto;
        z-index: 1;
      }

      #joystick-base {
        bottom: 32px;
        left: 32px;
        height: 250px;
        width: 250px;
        border-radius: 100%;
        /*border: 10px solid rgba(0, 136, 204, 1);*/
        background: rgb(0, 0, 20);
        background: -webkit-radial-gradient(rgb(250, 250, 250), rgba(5, 120, 180,0.8), rgb(5, 120, 180));
        background: -o-radial-gradient(rgb(250, 250, 250), rgba(5, 120, 180,0.8), rgb(5, 120, 180));
        background: -moz-radial-gradient(rgb(250, 250, 250), rgba(123, 198, 237, 0.8), rgb(5, 120, 180));
        background: radial-gradient(rgb(250, 250, 250), rgba(116, 194, 235, 0.8), rgb(5, 120, 180));
        transition: border-color 0.2s;
        cursor: pointer;
        touch-action: none;
        z-index: 2;
      }

      .joystick-stick {
        position: absolute;
        top: calc(50% - 32px);
        left: calc(50% - 32px);
        height: 64px;
        width: 64px;
        border-radius: 100%;
        background: linear-gradient(to bottom right, rgba(250, 250, 250, 0.8), rgba(5, 120, 180, 0.8), rgba(5, 120, 180, 0.8), rgba(100, 200, 250, 0.8));

        will-change: transform;
        touch-action: none;
        z-index: 3;
      }
    </style>
    <script>
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
      };
      function switchMode() {
        var edArea = document.getElementById('edArea');
        if (document.getElementById('carModeSwitch').checked == false) {

          document.getElementById('phone').style.opacity = '0.3';
          document.getElementById('flashlight').style.opacity = '1';
          /*
          ctlArea.innerHTML = '指向雷射啟動中';
          ctlArea.style.width = '100px';
          ctlArea.style.backgroundColor = '#f0288c';
          document.getElementById('ctlArea').style.marginLeft = 'auto';
          */
          xhttp.open('GET', 'Race?output=M', true);
          xhttp.send();
        }
        else {
          /*
          ctlArea.innerHTML = '手機遙控區';
          ctlArea.style.width = '67px';
          ctlArea.style.backgroundColor = '#09b4b7';
          document.getElementById('ctlArea').style.marginLeft = '5px';
          */
          document.getElementById('phone').style.opacity = '1';
          document.getElementById('flashlight').style.opacity = '0.3';

          xhttp.open('GET', 'Race?output=A', true);
          xhttp.send();
        }

      }

      function initAll() {
        var canvas = document.getElementById("canvas");
        var motorOutLR = [0, 0];
        var motorOutLRnow = [0, 0];
        function LOOP() {
          this.width;
          this.height;
          this.resize();
          this.state = {
            position: {
              x: (this.width / 2),
              y: (this.height / 2)
            },
            velocity: {
              x: 0,
              y: 0
            },
            rotation: 0,
            maxSpeed: 20,

          };

          this.lastRender = 0;
          this.friction = true;
        };

        LOOP.prototype.resize = function () {
          this.width = window.innerWidth * 2;
          this.height = window.innerHeight * 2;
          canvas.width = this.width;
          canvas.height = this.height;
        };

        LOOP.prototype.update = function (progress) {
          var p = progress / 16;
          this.updateMovement(p);
          this.updatePosition(p);
        };

        LOOP.prototype.updateMovement = function (p) {

          var accelerationVector = {
            x: p * 0.1,
            y: p * 0.1
          };

          if (joystick.currentPos.y > 0) {
            this.state.velocity.y += accelerationVector.y;
          };

          if (joystick.currentPos.y < 0) {
            this.state.velocity.y -= accelerationVector.y;
          };

          if (joystick.currentPos.x > 0) {
            this.state.velocity.x += accelerationVector.x;
          };

          if (joystick.currentPos.x < 0) {
            this.state.velocity.x -= accelerationVector.x;
          };


          // friction
          if (this.friction) {
            this.state.velocity.x *= 0.99;
            this.state.velocity.y *= 0.99;
          } else {
            this.state.velocity.x *= 1.00;
            this.state.velocity.y *= 1.00;
          };

          // Limit speed
          if (this.state.velocity.x > this.maxSpeed) {
            this.state.velocity.x = this.maxSpeed;
          }
          else if (this.state.velocity.x < -this.maxSpeed) {
            this.state.velocity.x = -this.maxSpeed;
          };
          if (this.state.velocity.y > this.maxSpeed) {
            this.state.velocity.y = this.maxSpeed;
          }
          else if (this.state.velocity.y < -this.maxSpeed) {
            this.state.velocity.y = -this.maxSpeed;
          };
        }

        LOOP.prototype.updatePosition = function (p) {
          this.state.position.x += this.state.velocity.x;
          this.state.position.y += this.state.velocity.y;

          // Detect boundaries
          if (this.state.position.x > this.width) {
            this.state.position.x -= this.width;
          }
          else if (this.state.position.x < 0) {
            this.state.position.x += this.width;
          }
          if (this.state.position.y > this.height) {
            this.state.position.y -= this.height;
          }
          else if (this.state.position.y < 0) {
            this.state.position.y += this.height;
          };
        };

        LOOP.prototype.main = function (timestamp) {
          var progress = timestamp - this.lastRender;
          this.update(progress);

          this.lastRender = timestamp;
        }


        function pause() {
          cancelAnimationFrame(RAF);
        }

        function countSpeed(motorL, motorR) {
          motorOutLRnow[0] = Math.round(motorL);
          motorOutLRnow[1] = Math.round(motorR);
          if ((motorOutLR[0] != motorOutLRnow[0]) || (motorOutLR[1] != motorOutLRnow[1])) {
            xhttp.open('GET', 'Race?output=' + motorOutLRnow.join("x"), true);
            xhttp.send();
            motorOutLR[0] = motorOutLRnow[0];
            motorOutLR[1] = motorOutLRnow[1];
          }
        }

        function JOYSTICK(parent) {
          this.dragStart = null;
          this.currentPos = { x: 0, y: 0 };
          this.maxDiff = 125;
          this.stick = document.createElement('div');
          this.stick.classList.add('joystick-stick');
          parent.appendChild(this.stick);

          this.stick.addEventListener('mousedown', this.handleMouseDown.bind(this));
          document.addEventListener('mousemove', this.handleMouseMove.bind(this));
          document.addEventListener('mouseup', this.handleMouseUp.bind(this));
          this.stick.addEventListener('touchstart', this.handleMouseDown.bind(this));
          document.addEventListener('touchmove', this.handleMouseMove.bind(this));
          document.addEventListener('touchend', this.handleMouseUp.bind(this));

        };

        function absorbEvent_(event) {
          var e = event || window.event;
          e.preventDefault && e.preventDefault();
          e.stopPropagation && e.stopPropagation();
          e.cancelBubble = true;
          e.returnValue = false;
          return false;
        }

        JOYSTICK.prototype.handleMouseDown = function (event) {
          this.stick.style.transition = '0s';
          if (event.changedTouches) {
            this.dragStart = {
              x: event.changedTouches[0].clientX,
              y: event.changedTouches[0].clientY,
            };
          }
          else {
            this.dragStart = {
              x: event.clientX,
              y: event.clientY,
            };
          }
          return absorbEvent_(event);
        };

        JOYSTICK.prototype.handleMouseMove = function (event) {
          if (this.dragStart === null) return;
          event.preventDefault();
          if (event.changedTouches) {
            event.clientX = event.changedTouches[0].clientX;
            event.clientY = event.changedTouches[0].clientY;
          }
          const xDiff = event.clientX - this.dragStart.x;
          const yDiff = event.clientY - this.dragStart.y;
          const angle = Math.atan2(yDiff, xDiff);
          const distance = Math.min(this.maxDiff, Math.hypot(xDiff, yDiff));
          const speedRatio = distance / this.maxDiff;
          const srcDirCount = Math.round(angle * 3.2);
          const dirCount = Math.abs(srcDirCount);
          if (dirCount > 5) {
            dirCount_out = (dirCount - 10) * (4 - 0) / (6 - 10) + 0;
          }
          else {
            dirCount_out = dirCount;
          }


          if (srcDirCount == -5) {
            //dirQuand = 5;
            countSpeed(speedRatio * 5, speedRatio * 5);
          }
          else if (srcDirCount == 5) {
            //dirQuand = 6;
            countSpeed(-(speedRatio) * 5, -(speedRatio) * 5);
          }
          else {
            if (srcDirCount <= 0 && srcDirCount > -5) {
              //dirQuand = 1;
              countSpeed(speedRatio * 5, speedRatio * dirCount_out);
            }
            else if (srcDirCount > 5 && srcDirCount < 10) {
              //dirQuand = 3;
              countSpeed(-speedRatio * dirCount_out, -speedRatio * 5);
            }
            else if (srcDirCount > 0 && srcDirCount < 5) {
              //dirQuand = 4;
              countSpeed(-speedRatio * 5, -speedRatio * dirCount_out);
            }
            else {
              //dirQuand = 2;
              countSpeed(speedRatio * dirCount_out, speedRatio * 5);
            }
          }
          // Get the distance between the cursor and the center
          const distanceOld = Math.sqrt(Math.pow(xDiff, 2) + Math.pow(yDiff, 2));

          const xNew = distance * Math.cos(angle);
          const yNew = distance * Math.sin(angle);
          this.stick.style.transform = `translate3d(${xNew}px, ${yNew}px, 0px)`;
          this.currentPos = { x: xNew, y: yNew };
          return absorbEvent_(event);
          //console.log( this.currentPos, distance, angle, distanceOld );
        };

        JOYSTICK.prototype.handleMouseUp = function (event) {
          if (this.dragStart === null) return;
          this.stick.style.transition = '.2s';
          this.stick.style.transform = `translate3d(0px, 0px, 0px)`;
          this.dragStart = null;
          this.currentPos = { x: 0, y: 0 };
          countSpeed(0, 0);
          return absorbEvent_(event);
        };

        const joystick = new JOYSTICK(document.getElementById('joystick-base'));
        var loop = new LOOP();
        window.onresize = loop.resize();
        loop.main();
        //# sourceURL=pen.js
      }
    </script>
  </head>
  <body onload='initAll()'>
    <div class='bannerArea'>
    <img class="ban" id="ban"  src="data:image/png;base64,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">
  </div>

    <div class='center'>
      <!-- 設定區 -->
      <div class='setArea'>
        <img class="flashlight" id="flashlight" src="data:image/png;base64,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">
        <label class="switch">
          <input type="checkbox" id='carModeSwitch' checked onchange='switchMode()'>
          <span class="slider round"></span>
        </label>
        <img class="phone" id="phone" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEkAAAA0CAYAAADGzxXDAAAACXBIWXMAAAsSAAALEgHS3X78AAADTElEQVRoge2avXHbMABGH3XEnVhFG0RZINYAuTM9QM7awPQEUTawNlAmML2BfBkgdJFealNRlyKtU7FAgRSAbEWiQFA/JmXj3bEQDAHQMwl8BBkopQCIhIiBETAAekAGpIWUU145kRAJMARi4BGYAZNCygwApRTdMEy6Yai2HKlSitd6dMMwtfz2RClF0A3DGPhRIfuukDI50j+yMSIhUuCqotpF0A3DKXDp0OYDMCykfNxzbI0TCdEDpsC5Q/X7DnoOcuEcyCIhXOu3EjP+DDdBAIMOepJ25QwtKqk3tHZgxp2hf4crvY75Uh3eAbeREFNz2raeSIheJMQUuEWPvw5ZB0h37PsSyNt+Vpnx5bjNu2WkgVLKdZa3MQdGT7miBZjcN6HepbXOXSFlEqyEyZT9RIFeASdNBtBIiCE6FLtOzNt4ij1PkkwHE+DLno0DLNCXcVpImR+gPSuREH0gMcf7AzT5rZBytPzwnyTTYYKe4A7FHC0sK6ScHapRs5THaDH7XFLrXBdSpqsFG5LMAGJ02Kq7ElTxF31flKEn0xyY2QKqWUEHQN8csfl8jLENy+bVUkkrg3NNpaeO9W5iq6QlkRAzDns6t41xIeWNrULH9kez4r1mQd+rBIFF0oEiQdv5bH6nlVJJb0TQkqsqURuSTAR4K4KWWEWVnUnDHTr5Dfzc4Xtt4sqk9Q3KJNXdL5oDHwspPwEfgK+mrAnmpv+zHceQlBWWJe4c92g/B+KyfGFuFWL0mTmo0WYdFuhwOkUn+nyl/+XDjDqr80MhZbxeWCbJdTt3q6AyjLQB/6dn16D6B/jFSkpHJ/W8os+6opwlxVQ/GKglaBuREPYk+8zFrtswNUWVPvDYmJPMYMaWhg4i6KUw44xxm6PSssLSnGRS6AVwv1K8QMs7GUFLHEWNt52tlfdux+QlLre1/nroDbmE54VkDtzYNgrflKRdsd7gejRekgNekgNekgOnIilvsvOmJd1XV2HxEo+lbDQtaeJQZ1Rd5bg0Kslkn2tLlXEbXkdsNEwuMTsEy/c1Qc9BaVveLWiFpLbT9Jx0EnhJDnhJDnhJDnhJDnhJDnhJDnhJDnhJDnhJDnhJDnhJDnhJFoIg6IOXVEUf4B8Rz+8KSSOWqgAAAABJRU5ErkJggg==">
      </div>

      <!-- 控制區 -->
      <div  id='edArea'>
        <div id="joystick-main">
          <div id="joystick-base"></div>
        </div>
        <canvas id="canvas" width="1496" height="488" />
      </div>

    </div>

  </body>
  </html>


)";
//----------------------這裡是錯誤路徑頁面--------------------
static const char errorPage[] PROGMEM= u8R"(
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset='UTF-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>網站路徑錯誤</title>
  </head>
  <body>
  <h1 align="center">網址錯誤, <a href='/'>請點此跳回主頁</a></h1>
  </body>
  </html>
)";
//----------------------這裡是設定路徑頁面--------------------
static const char settingPage[] PROGMEM= u8R"(
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset='UTF-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>設定頁面</title>
  </head>
  <body>
  <h1 align="center">不用設定, <a href='/'>請點此跳回主頁</a></h1>
  </body>
  </html>
)";
//---------以下這一行不要刪除, 這可以讓網頁資料儲存在程式區, 節省記憶體--------------
#define WEBPAGE_IN_PROGMEM
