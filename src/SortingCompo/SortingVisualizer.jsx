import React, { useState, useEffect } from "react";
import Visualiser from "./Visualiser";
import Control from "./Control";
import { bubbleSort } from "../algorithm/BubbleSort";
import { MergeSort } from "../algorithm/MergeSort";
import { selectionSort } from "../algorithm/SelectionSort";
import { bfsTraversal } from "../algorithm/bfsTraversal";

function SortingVisualizer() {
  const [array, setArray] = useState([]);
  const [userInuptArray, setUserInuptArray] = useState('');
  const [speed, setSpeed] = useState(100);
  const [isSorting, setIsSorting] = useState(false);
  const [selectedSorting, setSelectedSorting] = useState('');

  useEffect(() => {
    const userInput = userInuptArray.split(',');
    const filteredInput = userInput
      .filter(item => !isNaN(item) && Number.isInteger(parseFloat(item)))
      .map(item => Number(item) <= 500 && Number(item));
    setArray([...filteredInput]);
  }, [userInuptArray]);

  const handleNewArrayGenrate = () => {
    console.log("handleNewArrayGenrate")
    const newArray = Array.from({ length: 15 }, () =>
      Math.floor(Math.random() * 500)
    );
    setArray(newArray);
  };

  const reSet = () => {
    console.log("reSet")
    setArray([]);
    setSelectedSorting('');
  };

  const handleSorting = (e) => {
    const sortingMethod = e.target.value;
    setSelectedSorting(sortingMethod);
    setIsSorting(true);
    
    let animationArr, sortedArray;
    
    switch (sortingMethod) {
      case 'bubbleSort':
        animationArr = bubbleSort([...array]); // Copy array before sorting
        bubbleAnimation(animationArr);
        sortedArray = animationArr[animationArr.length - 1]; // Get final sorted array
        break;
      case "mergeSort":
        animationArr = MergeSort([...array]);
        animateMergeSorting(animationArr);
        sortedArray = animationArr[animationArr.length - 1];
        break;
      case "selectionSort":
        animationArr = selectionSort([...array]);
        animateSelectionSorting(animationArr);
        sortedArray = animationArr[animationArr.length - 1];
        break;

        animationArr = bfsTraversal([...array]);
        animatebfsTraversalSorting(animationArr);
        sortedArray = animationArr[animationArr.length - 1];
        break;
      default:
        return;
    }
    

};


  function bubbleAnimation(animation) {
    const barEle = document.getElementsByClassName('bar');
    for (let i = 0; i < animation.length; i++) {
      let [barOneInd, bartwoInd, swap] = animation[i];
      let barOne = barEle[barOneInd];
      let barTwo = barEle[bartwoInd];
      setTimeout(() => {
        barOne.style.backgroundColor = swap ? 'red' : 'yellow';
        barTwo.style.backgroundColor = swap ? 'red' : 'yellow';
        if (swap) {
          const heightTemp = barOne.style.height;
          barOne.style.height = barTwo.style.height;
          barTwo.style.height = heightTemp;
          const content = barOne.innerText;
          barOne.innerText = barTwo.innerText;
          barTwo.innerText = content;
        }
        setTimeout(() => {
          barOne.style.backgroundColor = 'blue'
          barTwo.style.backgroundColor = 'blue'
        }, speed)
      }, i * speed);
    }
    setTimeout(() => {
      for (let j = 0; j < barEle.length; j++) {
        setTimeout(() => {
          barEle[j].style.backgroundColor = 'green';
        }, j * speed);
      }
      setIsSorting(false);
    }, animation.length * speed)
  }
  const animateMergeSorting = (animations) => {
    const bars = document.getElementsByClassName("bar");
    for (let i = 0; i < animations.length; i++) {
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOne = bars[barOneIdx];
        const barTwo = bars[barTwoIdx];
        const color = i % 3 === 0 ? "yellow" : "blue";
        setTimeout(() => {
          barOne.style.backgroundColor = color;
          barTwo.style.backgroundColor = color;
        }, i * speed);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOne = bars[barOneIdx];
          barOne.style.height = `${newHeight}px`;
          barOne.innerHTML = newHeight;
        }, i * speed);
      }
    }

    setTimeout(() => {
      for (let j = 0; j < bars.length; j++) {
        setTimeout(() => {
          bars[j].style.backgroundColor = "green";
        }, j * speed);
      }
      setIsSorting(false);
    }, animations.length * speed);
  };
  const animateSelectionSorting = (animations) => {
    const bars = document.getElementsByClassName("bar");
    for (let i = 0; i < animations.length; i++) {
      const [barOneIdx, barTwoIdx, swap] = animations[i];
      const barOne = bars[barOneIdx];
      const barTwo = bars[barTwoIdx];
      setTimeout(() => {
        barOne.style.backgroundColor = swap ? "red" : "yellow";
        barTwo.style.backgroundColor = swap ? "red" : "yellow";
        if (swap) {
          const tempHeight = barOne.style.height;
          barOne.style.height = barTwo.style.height;
          barTwo.style.height = tempHeight;
          const tempContent = barOne.innerHTML;
          barOne.innerHTML = barTwo.innerHTML;
          barTwo.innerHTML = tempContent;
        }
        setTimeout(() => {
          barOne.style.backgroundColor = "blue";
          barTwo.style.backgroundColor = "blue";
        }, speed);
      }, i * speed);
    }
    setTimeout(() => {
      for (let j = 0; j < bars.length; j++) {
        setTimeout(() => {
          bars[j].style.backgroundColor = "green";
        }, j * speed);
      }
      setIsSorting(false);
    }, animations.length * speed);
  };



  return (
    <div>
      <h2 className="text-3xl font-semibold text-center mb-4">
        Sorting Visualizer
      </h2>
      <Control
        handleNewArrayGenrate={handleNewArrayGenrate}
        handleSorting={handleSorting}
        userInuptArray={userInuptArray}
        setUserInuptArray={setUserInuptArray}
        setSpeed={setSpeed}
        reSet={reSet}
        isSorting={isSorting}
        speed={speed}
        selectedSorting={selectedSorting}
      />
      <Visualiser array={array} />
    </div>
  );
}

export default SortingVisualizer;
