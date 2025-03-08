import React from 'react';


interface GuaranteeCardProps {
  className?: string;
}

const GuaranteeCard: React.FC<GuaranteeCardProps> = ({ className }) => {
  return (
    <div className={`${className}`}>

    </div>
  );
};

export default GuaranteeCard;