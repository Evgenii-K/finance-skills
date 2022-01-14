export interface ExampleStateInterface {
  prop: boolean;
  cash: number;
}

function state(): ExampleStateInterface {
  return {
    prop: false,
    cash: 1000,
  }
};

export default state;
