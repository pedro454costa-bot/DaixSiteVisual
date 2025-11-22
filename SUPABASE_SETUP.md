# Configuração Supabase - DAIX

## Tabela demo_requests

Para que o formulário de demonstração funcione corretamente, você precisa criar a tabela `demo_requests` no seu banco Supabase.

### SQL para criar a tabela:

```sql
CREATE TABLE demo_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  whatsapp TEXT NOT NULL,
  needs TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW() NOT NULL
);
```

### Como executar:

1. Acesse o Supabase Dashboard: https://onpahhuahzblzkgmuaim.supabase.co
2. Vá em **SQL Editor** no menu lateral
3. Cole o SQL acima
4. Clique em **Run** para executar

### Verificação:

Após criar a tabela, o formulário de demonstração no site irá automaticamente salvar as informações dos clientes no banco de dados.

### Variáveis de Ambiente:

As seguintes variáveis já estão configuradas no ambiente:

- `VITE_SUPABASE_URL`: https://onpahhuahzblzkgmuaim.supabase.co
- `VITE_SUPABASE_ANON_KEY`: (configurada como secret)

## Estrutura de Dados

Quando um cliente preenche o formulário, os seguintes dados são salvos:

- **id**: UUID gerado automaticamente
- **name**: Nome do cliente
- **whatsapp**: Número do WhatsApp
- **needs**: Descrição das necessidades do cliente
- **created_at**: Data/hora do registro (gerado automaticamente)
