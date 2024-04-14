// typeOfTheaterController.js

import TypeOfTheater from '../models/typeOfTheaterModel.js';

const typeOfTheaterController = {


  createTypeOfTheater: async (req, res) => {
    try {
      const { name, numberOfPeople, contact, addOns } = req.body;

      const newTypeOfTheater = new TypeOfTheater({
        name,
        numberOfPeople,
        contact,
        addOns,
      });

      const savedTypeOfTheater = await newTypeOfTheater.save();
      res.json(savedTypeOfTheater);
    } 
    catch (error) {
      console.error('Error in createTypeOfTheater:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  getAllTypesOfTheaters: async (req, res) => {
    try {
      console.log('Executing getAllTypesOfTheaters route');
      const typesOfTheaters = await TypeOfTheater.find();
      console.log('Types of Theaters:', typesOfTheaters);
      res.status(200).json(typesOfTheaters);
    }
     catch (error) {
      console.error('Error in getAllTypesOfTheaters:', error);
      res.status(500).json({ error: error.message });
    }
  },
};

export default typeOfTheaterController;
