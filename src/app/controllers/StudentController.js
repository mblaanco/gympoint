import * as Yup from 'yup';
import Student from '../models/Student';

class StudentController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string()
        .email()
        .required(),
      idade: Yup.string().required(),
      peso: Yup.string().required(),
      altura: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(401).json({ error: 'Validation fails' });
    }

    const studentExists = await Student.findOne({
      where: { email: req.body.email },
    });

    if (studentExists) {
      return res.status(400).json({ error: 'E-mail already exists.' });
    }

    const { id, name, email } = await Student.create(req.body);
    // const { name, idade, peso, altura } = await Student.create(req.body);

    return res.json({
      id,
      name,
      email,
    });
  }
}

export default new StudentController();
