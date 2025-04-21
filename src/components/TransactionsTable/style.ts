import styled from "styled-components";

export const Container = styled.div`
table{
  width: 100%;
  border-spacing: 0 0.5rem;

  th{
    color: var(--gray6);
    font-weight:400;
    padding: 1rem 2rem;
    text-align: left;
    line-height: 1.5rem;
  }
  td{
    padding: 1rem 2rem;
    border: 0;
    background-color: var(--gray3);
    color: var(--gray6);
    

    
    &.deposit{
      color: var(--green);

    }
    &.withdraw{
      color: var(--red);
    }
  }
  tr{
    
      
      td{
        
        
        img{
          display: none;
        }
      }
    
  }

}

@media screen and (max-width: 750px){
  table{
    thead{
    display: none;
  }
  tr{
    margin-top: 1.5rem;
    
   

  
      td{
        display: flex;
        
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        //display: table-row;
        img{
          display: flex;
          width: 1rem;
          height: 1rem;
        }
      }
      
      td:nth-of-type(3),td:nth-of-type(4){
          display: flex;
         
          img{
            display: inline-block;
            align-content: center;
            margin-right: 1rem;
            
          }
          
      }
    

  }
  }
  
}
@media screen and (max-width: 350px){
  td:nth-of-type(3),td:nth-of-type(4){
    display: block;
    width: auto;
    
      
  }
  
}
`;
