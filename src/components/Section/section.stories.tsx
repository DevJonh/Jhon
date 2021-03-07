import { Meta, Story } from '@storybook/react/types-6-0'

import Section from '.'

export default {
  title: 'Section',
  component: Section
} as Meta

export const Basic: Story = (args) => (
  <Section title="Sobre" left id="sobre" {...args}>
    <div className="container">
      <div className="about">
        <div
          style={{
            width: '150px',
            height: '150px',
            backgroundColor: '#eee',
            borderRadius: '50%'
          }}
        ></div>
        <div>
          <h2>JÔNATAS SENNA</h2>
          <p>Desenvolvedor web | frontend</p>
        </div>

        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel corrupti
          labore eaque deleniti voluptatem harum id natus et animi aperiam
          expedita, possimus, fugit architecto exercitationem ex est cupiditate
          quod suscipit.
        </p>
      </div>
      <div className="skills">
        <h2>HABILIDADES TÉCNICAS</h2>

        <ul>
          <li>
            <div
              style={{
                width: '50px',
                height: '50px',
                backgroundColor: '#eee',
                borderRadius: '50%'
              }}
            ></div>
            <p>Javascript</p>
          </li>
          <li>
            <div
              style={{
                width: '50px',
                height: '50px',
                backgroundColor: '#eee',
                borderRadius: '50%'
              }}
            ></div>
            <p>Javascript</p>
          </li>
          <li>
            <div
              style={{
                width: '50px',
                height: '50px',
                backgroundColor: '#eee',
                borderRadius: '50%'
              }}
            ></div>
            <p>Javascript</p>
          </li>
          <li>
            <div
              style={{
                width: '50px',
                height: '50px',
                backgroundColor: '#eee',
                borderRadius: '50%'
              }}
            ></div>
            <p>Javascript</p>
          </li>
          <li>
            <div
              style={{
                width: '50px',
                height: '50px',
                backgroundColor: '#eee',
                borderRadius: '50%'
              }}
            ></div>
            <p>Javascript</p>
          </li>
          <li>
            <div
              style={{
                width: '50px',
                height: '50px',
                backgroundColor: '#eee',
                borderRadius: '50%'
              }}
            ></div>
            <p>Javascript</p>
          </li>
          <li>
            <div
              style={{
                width: '50px',
                height: '50px',
                backgroundColor: '#eee',
                borderRadius: '50%'
              }}
            ></div>
            <p>Javascript</p>
          </li>
          <li>
            <div
              style={{
                width: '50px',
                height: '50px',
                backgroundColor: '#eee',
                borderRadius: '50%'
              }}
            ></div>
            <p>Javascript</p>
          </li>
          <li>
            <div
              style={{
                width: '50px',
                height: '50px',
                backgroundColor: '#eee',
                borderRadius: '50%'
              }}
            ></div>
            <p>Javascript</p>
          </li>
          <li>
            <div
              style={{
                width: '50px',
                height: '50px',
                backgroundColor: '#eee',
                borderRadius: '50%'
              }}
            ></div>
            <p>Javascript</p>
          </li>
          <li>
            <div
              style={{
                width: '50px',
                height: '50px',
                backgroundColor: '#eee',
                borderRadius: '50%'
              }}
            ></div>
            <p>Javascript</p>
          </li>
          <li>
            <div
              style={{
                width: '50px',
                height: '50px',
                backgroundColor: '#eee',
                borderRadius: '50%'
              }}
            ></div>
            <p>Javascript</p>
          </li>
          <li>
            <div
              style={{
                width: '50px',
                height: '50px',
                backgroundColor: '#eee',
                borderRadius: '50%'
              }}
            ></div>
            <p>Javascript</p>
          </li>
          <li>
            <div
              style={{
                width: '50px',
                height: '50px',
                backgroundColor: '#eee',
                borderRadius: '50%'
              }}
            ></div>
            <p>GIT</p>
          </li>
          <li>
            <div
              style={{
                width: '50px',
                height: '50px',
                backgroundColor: '#eee',
                borderRadius: '50%'
              }}
            ></div>
            <p>Javascript</p>
          </li>
        </ul>
      </div>
      <div className="formation">
        <h2>FORMAÇÕES</h2>
        <div className="container-history">
          <div className="history">
            <div>
              <strong>2018 - 2021</strong>
              <span>UNIFACS</span>
              <p>ANÁLISE E DESENVOLVIMENTO DE SISTEMAS</p>
              <p>GRADUAÇÃO TÉCNOLÓGICA</p>
            </div>
            <div className="container-marker">
              <span className="marker"></span>
            </div>
          </div>
          <div className="history">
            <div>
              <strong>2018 - 2021</strong>
              <span>UNIFACS</span>
              <p>ANÁLISE E DESENVOLVIMENTO DE SISTEMAS</p>
              <p>GRADUAÇÃO TÉCNOLÓGICA</p>
            </div>
            <div className="container-marker">
              <span className="marker"></span>
            </div>
          </div>
          <div className="history">
            <div>
              <strong>2018 - 2021</strong>
              <span>UNIFACS</span>
              <p>ANÁLISE E DESENVOLVIMENTO DE SISTEMAS</p>
              <p>GRADUAÇÃO TÉCNOLÓGICA</p>
            </div>
            <div className="container-marker">
              <span className="marker"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Section>
)
