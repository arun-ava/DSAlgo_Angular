// 2751. Robot Collisions
// https://leetcode.com/problems/robot-collisions/description/


export function survivedRobotsHealthsRunner() {
    // console.log(survivedRobotsHealths([5,4,3,2,1], [2,17,9,15,10], 'RRRRR'));
    console.log(survivedRobotsHealths([3,5,2,6], [10,10,15,12], 'RLRL'));
    console.log(survivedRobotsHealths([1,2,5,6], [10,10,11,11], 'RLRL'));
}

interface Robot {
    position: number,
    health: number,
    direction: string,
    id: number
}

function survivedRobotsHealths(positions: number[], healths: number[], directions: string): number[] {
    let stack: Robot[]=[];
    let arr: Robot[] = [];

    for(let i=0; i<positions.length; i++){
        arr.push({
            position: positions[i],
            health: healths[i],
            direction: directions[i],
            id: i+1
        });
    }

    arr.sort((a,b) => {
        return a.health - b.health;
    });

    for(let i=0; i<arr.length; i++){
        while(stack.length===0 || (stack[stack.length-1].direction ==='R' && arr[i].direction==='')){}
    }

    return [];
}

function survivedRobotsHealths2(positions: number[], healths: number[], directions: string): number[] {

    let arr = [];

    for(let i=0; i<directions.length;i++){
        arr.push({
            position: positions[i],
            health: healths[i],
            direction: directions[i]==='R'? 1 : -1,
            id: i+1
        });
    }

   
    arr.sort((a: any,b: any) => {
        return a.position - b.position;
    });


    let shouldIterate=true;

    let i=1; // infinite loop breaker

    while(shouldIterate && i<500) {
        i++;

        // set new positions
        for(let i=0; i<arr.length; i++){
            if(arr[i].direction === 1) {
                arr[i].position++;
            } else {
                // arr[i].position--;
            }
        }

        // check for collisions and set new health
        for(let i=0; i<arr.length-1; i++){

            if(arr[i].position === arr[i+1].position 
                && arr[i].direction === 1
                && arr[i+1].direction === -1 ){

                    if(arr[i].health < arr[i+1].health && arr[i].health!==0){
                        arr[i].health=0;
                        arr[i+1].health--;
                    } else 
                    if(arr[i].health > arr[i+1].health && arr[i+1].health!==0) {
                        arr[i+1].health=0;
                        arr[i].health--;
                    } else if(arr[i]===arr[i+1]){
                        arr[i].health=0;
                        arr[i+1].health=0;
                    }
            }
        }

        //check if there is still any element within the
        let hflr=false;
        shouldIterate=false;
        for(let i=0; i<arr.length;i++){
            if(arr[i].direction===1 && arr[i].health>0) {
                hflr=true;
            } else if(arr[i].direction===-1 && arr[i].health>0 && hflr) {
                shouldIterate = true;
                break;
            }
        }
    }

    return arr.filter((val) => {
        return val.health > 0;
    }).sort((a,b) => {
        return a.id-b.id;
    }).map((val) => {
        return val.health;
    });
};