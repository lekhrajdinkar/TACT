export interface FundMaintainance {
  fundNumber: string;
  acctNumber: string;
  abbr: string;
  class: string;
  symbol: string;
  dstFundCode: string; 
  dstAcctNumber: string;
  category: string;
  submittedBy: string;
  submittedOn: Date;
  approvedBy: string;
  approvedOn: Date;
}

//Dummuy Data
export const ELEMENT_DATA: FundMaintainance[] = [
  { fundNumber: '14', acctNumber: '11000014', abbr: 'ABCD', class: 'H', symbol:'XYZ' , dstFundCode :'12345' , dstAcctNumber: '6789', category:'FOF',  submittedBy:'LEKHRAJ', submittedOn: new Date(),  approvedBy: 'DINKAR', approvedOn : new Date()},
  { fundNumber: '15', acctNumber: '11000015', abbr: 'ABCD', class: 'H', symbol:'XYZ' , dstFundCode :'12345' , dstAcctNumber: '6789', category:'FOF',  submittedBy:'LEKHRAJ', submittedOn: new Date(),  approvedBy: 'DINKAR', approvedOn : new Date()},
  { fundNumber: '16', acctNumber: '11000016', abbr: 'ABCD', class: 'H', symbol:'XYZ' , dstFundCode :'12345' , dstAcctNumber: '6789', category:'FOF',  submittedBy:'LEKHRAJ', submittedOn: new Date(),  approvedBy: 'DINKAR', approvedOn : new Date()},
  { fundNumber: '14', acctNumber: '11000014', abbr: 'ABCD', class: 'H', symbol:'XYZ' , dstFundCode :'12345' , dstAcctNumber: '6789', category:'FOF',  submittedBy:'LEKHRAJ', submittedOn: new Date(),  approvedBy: 'DINKAR', approvedOn : new Date()},
  { fundNumber: '14', acctNumber: '11000014', abbr: 'ABCD', class: 'H', symbol:'XYZ' , dstFundCode :'12345' , dstAcctNumber: '6789', category:'FOF',  submittedBy:'LEKHRAJ', submittedOn: new Date(),  approvedBy: 'DINKAR', approvedOn : new Date()},
  { fundNumber: '14', acctNumber: '11000014', abbr: 'ABCD', class: 'H', symbol:'XYZ' , dstFundCode :'12345' , dstAcctNumber: '6789', category:'FOF',  submittedBy:'LEKHRAJ', submittedOn: new Date(),  approvedBy: 'DINKAR', approvedOn : new Date()},
  { fundNumber: '14', acctNumber: '11000014', abbr: 'ABCD', class: 'H', symbol:'XYZ' , dstFundCode :'12345' , dstAcctNumber: '6789', category:'FOF',  submittedBy:'LEKHRAJ', submittedOn: new Date(),  approvedBy: 'DINKAR', approvedOn : new Date()},
  { fundNumber: '14', acctNumber: '11000014', abbr: 'ABCD', class: 'H', symbol:'XYZ' , dstFundCode :'12345' , dstAcctNumber: '6789', category:'FOF',  submittedBy:'LEKHRAJ', submittedOn: new Date(),  approvedBy: 'DINKAR', approvedOn : new Date()}  
];

// 'fundNumber', 'acctNumber',  'class', 'symbol', 'dstFundCode', 'dstAcctNumber' ,'category', 'submittedBy', 'submotteiOn', 'approvedBy', 'approvedOn' 