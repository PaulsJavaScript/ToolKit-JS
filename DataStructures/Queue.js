/**
 * @name      Queue.js
 * @author    Joseph Evans <joeevs196@hotmail.co.uk>
 * @version   0.0.1
 * @license   MIT-license
 * @copyright Joseph Evans 2018
 * @file      the purpose of this file is to simply implement a Queue data structure.
 * @todo      add more felexibility
 */

/**
 * @global
 * @class
 * @constructor
 * @name      Queue
 * @param     {Int} len this is simply the length of the queue that you'd like to 
 *                      create
 * @classdesc the purpose of this class is to simply implement a queue data
 *            structure, this queue is specifically used with the recently viewed
 *            list, as we need the ability to remove the first item, then add
 *            a new one to the end of the list, hence the need for a queue
 */
function Queue (len) {
    this.index = 0;
    this.size = len;
    this.data = [];
}


/**
 * @public
 * @function
 * @name        enqueue
 * @param       {*} data this is simply the data that you want to add to the
 *                       queue
 * @description the purpose of this function is to simply add data to the
 *              queue data structure, this is a simple enqueue example
 */
Queue.prototype.enqueue = function (data) {
    if (this.index >= this.size) { return; }
    this.data.push(data);
    this.index ++;
};


/**
 * @public
 * @function
 * @name        dequeue
 * @return      {*}
 * @description the purpose of this function is to simply remove the first
 *              element form the queue, like a queue in real life, it's the
 *              first person that leaves the queue first, and the
 *              last person is the last to leave
 */
Queue.prototype.dequeue = function () {
    if (this.index > 0) { this.index --; return this.data.shift(); } 
    else { return null; }
};


/**
 * @public 
 * @function 
 * @name        smartEnqueue
 * @param       {*} data    this is simply the data that you wish to add to 
 *                          your queue 
 * @description the purpose of this function is to include the ability to 
 *              dequeue something when the queue is full, unlike the simple
 *              enqueue function above
 */
Queue.prototype.smartEnqueue = function (data) {
    if (this.index < this.size) { this.enqueue(data); } 
    else if (this.index == this.size) { this.dequeue(); this.enqueue(data); }
};


/**
 * @public 
 * @function 
 * @name        getSize
 * @return      {Int}
 * @description the purpose of this function is to simply retrieve the length 
 *              of the current queue 
 */
Queue.prototype.getSize = function () {
    return this.index;
};
