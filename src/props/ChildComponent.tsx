import React, { useEffect, useState} from 'react';

interface ContainerProps {
  myProp: String,
  onChange:any
}

const ChildComponent: React.FC<ContainerProps> = (props) => {
    const [childValue, setChildValue] = useState('');

    useEffect(() => {
        // Perform some task when props.myProp changes
        console.log('myProp changed:', props.myProp);
      }, [props.myProp]); 

      const handleChange = (event) => {
        const newValue = event.target.value;
        setChildValue(newValue);
        props.onChange(event,newValue); // Call the onChange function passed from parent
      };


  return (
    <div>
      <p>{props.myProp}</p>
      <input type="text" value={childValue} onChange={handleChange} />
    </div>
  );
};

export default ChildComponent;
