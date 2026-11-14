/* ============================================================
   BIs DO BUSINESS SUPPORT & COMMERCIAL OPERATIONS
   ------------------------------------------------------------
   Este é o ÚNICO arquivo que precisa ser editado no dia a dia.

   Para ADICIONAR um BI: copie um bloco { ... } dentro da lista
   "bis" da frente certa, cole logo abaixo e troque os textos.
   Não esqueça a vírgula entre um bloco e outro.

   Campos de cada BI:
     nome       nome que aparece no site
     descricao  uma frase curta
     link       link do relatório no Power BI
     preview    (opcional) imagem em assets/img/bis/
   ============================================================ */

window.HUB = {
  contato: "robson.castilhos@adm.com",

  frentes: [
    {
      id: "business-support",
      nome: "Business Support",
      cor: "#426DA9",
      foto: "assets/img/fotos/business-support.webp",
      bis: [
        {
          nome: "Validação Duplicidade",
          descricao: "Notas fiscais duplicadas para validação e correção dos casos.",
          link:
            "https://app.powerbi.com/groups/me/reports/751b0863-5b74-43ce-9c10-849e257cea1d/426d6cef07dc476952da?ctid=2f55bf32-42d4-44b3-a8c2-930ac8b182b2&openReportSource=ReportInvitation&experience=power-bi",
          preview: "assets/img/bis/validacao-duplicidade.webp",
        },
        {
          nome: "ExpenseGrains",
          descricao: "Despesas de Grains por grupo, mês e regional.",
          link:
            "https://app.powerbi.com/groups/me/reports/defb26f8-f2f8-4949-ab51-63ef43bdf694/a1e73f3d90cd7261d43b?ctid=2f55bf32-42d4-44b3-a8c2-930ac8b182b2&openReportSource=ReportInvitation&experience=power-bi",
          preview: "assets/img/bis/expensegrains.webp",
        },
        {
          nome: "Prestação de Serviço - Armazenagem",
          descricao: "Notas de prestação de serviço em silo e status de quitação.",
          link:
            "https://app.powerbi.com/groups/941861e7-716f-4c16-8aaf-ec7c830a176a/reports/477f5d30-776c-426b-97ac-d1fffcc0d16d/86b1616a04d508bb6ec6?experience=power-bi",
          preview: "assets/img/bis/prestacao-de-servico-armazenagem.webp",
        },
        {
          nome: "Cancelamentos ADM",
          descricao: "Cancelamentos de notas fiscais e retorno de cada caso.",
          link:
            "https://app.powerbi.com/groups/941861e7-716f-4c16-8aaf-ec7c830a176a/reports/1e8af009-2371-4ade-8170-44a45cc95d00/a51c04530c93efa2d252?ctid=2f55bf32-42d4-44b3-a8c2-930ac8b182b2&openReportSource=ReportInvitation&experience=power-bi",
          preview: "assets/img/bis/cancelamentos-adm.webp",
        },
        {
          nome: "Controle dos Royalties",
          descricao: "Capturas, solicitações e verificações de royalties.",
          link:
            "https://app.powerbi.com/groups/me/reports/7e9f5923-fee9-4ade-82f4-19d6fbc71487/9f1be5f331e0cab83328?ctid=2f55bf32-42d4-44b3-a8c2-930ac8b182b2&openReportSource=ReportInvitation&experience=power-bi",
          preview: "assets/img/bis/controle-dos-royalties.webp",
        },
        {
          nome: "Gestão NC-ND e Contratos",
          descricao: "Notas de complemento e devolução de valor ligadas aos contratos.",
          link:
            "https://app.powerbi.com/groups/me/reports/69a34b24-b1d7-4ffb-bac1-cdbc30ec2901/ReportSection?ctid=2f55bf32-42d4-44b3-a8c2-930ac8b182b2&openReportSource=ReportInvitation&experience=power-bi",
          preview: "assets/img/bis/gestao-nc-nd-e-contratos.webp",
        },
        {
          nome: "Pré Nota",
          descricao: "Lançamentos de pré-nota por localidade e processo.",
          link:
            "https://app.powerbi.com/groups/941861e7-716f-4c16-8aaf-ec7c830a176a/reports/9bfc20f7-3de4-4b9e-8b49-0434dfb4a292/512667a55ad485706708?ctid=2f55bf32-42d4-44b3-a8c2-930ac8b182b2&openReportSource=ReportInvitation&experience=power-bi",
          preview: "assets/img/bis/pre-nota.webp",
        },
        {
          nome: "Gestão de Trânsito Rodoviário",
          descricao: "Cargas em trânsito e tratamento dos tickets pendentes.",
          link:
            "https://app.powerbi.com/groups/me/reports/411ee3cb-bf3f-47b1-9014-5856257ad749/ReportSection?ctid=2f55bf32-42d4-44b3-a8c2-930ac8b182b2&openReportSource=ReportInvitation&experience=power-bi",
          preview: "assets/img/bis/gestao-de-transito-rodoviario.webp",
        },
      ],
    },
    {
      id: "commercial-operations",
      nome: "Commercial Operations",
      cor: "#DC582A",
      foto: "assets/img/fotos/commercial-operations.webp",
      bis: [
        {
          nome: "Sustentabilidade 2.0",
          descricao: "Cadastro e situação fiscal e ambiental de fornecedores.",
          link:
            "https://app.powerbi.com/groups/4e579487-dc55-4fb8-86f3-7c7d64bce621/reports/084cd526-2a17-4198-8753-3063f488d9c1/a77883e9c30643ebac70?ctid=2f55bf32-42d4-44b3-a8c2-930ac8b182b2&openReportSource=ReportInvitation&experience=power-bi",
          preview: "assets/img/bis/sustentabilidade-2-0.webp",
        },
        {
          nome: "Integrated Finance Exposure _PROD",
          descricao: "Exposição financeira: valores a receber, adiantamentos e contratos a pagar.",
          link:
            "https://app.powerbi.com/groups/me/reports/072fb3b0-dac4-47a4-b7df-7f5b1fb3a5e7/4035898edf4eec2072d9?ctid=2f55bf32-42d4-44b3-a8c2-930ac8b182b2&openReportSource=ReportInvitation&experience=power-bi",
          preview: "assets/img/bis/integrated-finance-exposure-prod.webp",
        },
        {
          nome: "Sustentabilidade",
          descricao: "Contratos com bloqueio ambiental ou federal, por produtor.",
          link:
            "https://app.powerbi.com/groups/4e579487-dc55-4fb8-86f3-7c7d64bce621/reports/7b36895a-8c7f-4666-943e-b984f75d4f96/f4f6f071b8463ad732a0?ctid=2f55bf32-42d4-44b3-a8c2-930ac8b182b2&openReportSource=ReportInvitation&experience=power-bi",
          preview: "assets/img/bis/sustentabilidade.webp",
        },
        {
          nome: "Baixa de adiantamentos",
          descricao: "Adiantamentos em aberto e contratos disponíveis para baixa.",
          link:
            "https://app.powerbi.com/groups/me/reports/5826bb38-6a2e-4c73-a1d4-e6a01b940c0c/082ee464be17ca6d884b?ctid=2f55bf32-42d4-44b3-a8c2-930ac8b182b2&openReportSource=ReportInvitation&experience=power-bi",
          preview: "assets/img/bis/baixa-de-adiantamentos.webp",
        },
        {
          nome: "Controle dos Royalties",
          descricao: "Capturas, solicitações e verificações de royalties.",
          link:
            "https://app.powerbi.com/groups/me/reports/7e9f5923-fee9-4ade-82f4-19d6fbc71487/9f1be5f331e0cab83328?ctid=2f55bf32-42d4-44b3-a8c2-930ac8b182b2&openReportSource=ReportInvitation&experience=power-bi",
          preview: "assets/img/bis/controle-dos-royalties.webp",
        },
      ],
    },
  ],
};
