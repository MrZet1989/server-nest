import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	app.setGlobalPrefix('api');
	const PORT = 4000;
	await app.listen(PORT, () => {
		console.log(`Server started ${PORT}`);
	});
}
bootstrap();
