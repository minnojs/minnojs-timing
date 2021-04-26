# Minno timing

This repository is dedicated for code for testing the accuracy of web based behavioural experimentation platforms.
The tasks we test are based on the tasks used in [Bridges and colleagues 2020](https://peerj.com/articles/9414/).

Player      | Response                                                              | Stimulus
----------  | --------------------------------------------------------------------- | ---------
minnoJS     | [link](https://minnojs.github.io/minnojs-timing/minnojs/response)     | [link](https://minnojs.github.io/minnojs-timing/minnojs/stim)   
jsPsych     | [link](https://minnojs.github.io/minnojs-timing/jspsych/response)     | [link](https://minnojs.github.io/minnojs-timing/jspsych/stim)   


### Task 1: Response timing

In this experiment, only the player measures latencies.
We set the BBTK to DSRE (Digital Stimulus Response Echo) mode.

* player: wait 300ms
* player: display stimulus
* blackbox: wait 100ms
* blackbox: click (50ms)
* player: endTrial

This experiment measures the accuracy of measured response times.
This is important because we are usually interested in how long it takes participants to respond.
Expected latency is 100ms + keyboard response time.
It can be affected by
* A discrepancy between the time that is recorded for displaying, and the time that stimuli are actually displayed onscreen.
* Latency or noise in keypress measurements

### Task 2: Stimulus timing
In this experiment, only BBTK measures response times.
We set the BBTK to DSC (Digital stimulus capture) mode.

* player: wait 300ms
* player: display stimulus
* blackbox: measure onset
* player: wait 200ms
* player: endTrial (hide stimulus)
* blackbox: measure offset

This experiment measures capability to disply stimuli for predetermined times.
It is important because we want to know that we can expose participants to specific stimuli (e.g. 200ms image).
Expected measure latency is 200ms.
It can be effected by:
* faulty time (e.g. setTimeout)
* Noisy onset/offset times of display.


