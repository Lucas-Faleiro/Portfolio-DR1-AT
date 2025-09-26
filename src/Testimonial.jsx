import styles from "./Testimonial.module.css";

export default function Testimonial() {
  return (
    <div className={styles.testimonialContainer}>
      <h4 className={styles.testimonialTitle}>Meu Depoimento</h4>
      <div className={styles.testimonial}>
        <p>
          Nascido na terra do pêqui(Goiânia-GO), sempre fui apaixonado pelo
          mundo da tecnologia e o mundo geek. Decidi começar uma carreira na
          área de Desenvolvimento Web, pois acredito que é uma área que está em
          constante evolução e que me desafia a aprender coisas novas todos os
          dias. Comecei o curso de Análise e Desenvolvimento de Sistemas no
          Instituto Infnet, onde estou adquirindo conhecimentos sólidos de
          Javascript, React, Mobile-first, entre outros. Estou muito animado
          para começar a aplicar meu conhecimento em projetos reais e soluções
          inovadoras.
        </p>
      </div>
    </div>
  );
}
