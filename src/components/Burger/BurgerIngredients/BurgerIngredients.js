
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import classes from './BurgerIngredients.css';

class BurgerIngredient extends Component {
	

	render () 
	{

		let ingeredient = null

		switch(this.props.type)
			{
				case ('bread-bottom'):
					ingeredient = <div className={classes.BreadBottom}></div>;
					break; 
				case ('bread-top'):
					ingeredient = (
						<div className={classes.BreadTop}>
							<div className = {classes.seeds1}></div>
							<div className= {classes.Seeds2}></div>
						</div>
					);
					break;
				case ('meat'):
					ingeredient = <div className={classes.Meat}></div>;
					break;
				case ('cheese'):
					ingeredient = <div className={classes.Cheese}></div>;
					break;
				case ('bacon'):
					ingeredient = <div className={classes.Bacon}></div>;
					break;
				case ('salad'):
					ingeredient = <div className={classes.Salad}></div>;
					break;
				default:
					ingeredient = null;
					break;
			} 

		return ingeredient; 
	}

}

BurgerIngredient.propTypes = {
	type: PropTypes.string.isRequired 
};


export default BurgerIngredient; 