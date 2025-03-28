import api from "../api/api";

export async function loginUser(credenciais) {
  const response = await api.post("/user/login", credenciais);
  return response.data.accessToken;
}

export async function buscarPerfil() {
  const res = await api.get("/user");
  return res.data;
}

export async function logoutUsuario() {
  await api.post("/user/logout");
}

export async function enviarCodigoEmail(email) {
  return api.post("/user/enviar-email", { email });
}

export async function redefinirSenha(codigoAutenticacao, novaSenha) {
  return api.put("/user/redefinir-senha", { novaSenha, codigoAutenticacao});
}

