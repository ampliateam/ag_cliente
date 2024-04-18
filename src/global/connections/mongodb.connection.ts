import mongoose from 'mongoose';
import { envs } from '@global/configs/envs';

export const conexionConMongoDB = async () => {
    try {
        await mongoose.connect(envs.mongoURI);

        if (envs.environment === 'local_development')
            console.info('MongoDB connected!');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
};
